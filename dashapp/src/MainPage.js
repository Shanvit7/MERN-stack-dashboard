import React, {
    useEffect
} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNav from "./TopNav";
import CardUI from "./CardUI";
import * as Icon from 'react-bootstrap-icons';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import WorldMap from "./WorldMap";
import {
    useState
} from 'react';
import {
    use
} from "express/lib/application";

import { Container, Col,Row} from "react-bootstrap";
import SideBar from './SideBar';
import BottomNav from "./BottomNav";
import { motion } from 'framer-motion/dist/framer-motion';



function MainPage() {
    const loadDatatxt = 'Data is loading...'; // Used while the client fetches data from server
    const [revenue, setRevenue] = useState(loadDatatxt);
    const [activity, setActivity] = useState(loadDatatxt);
    const [uploads, setUploads] = useState(loadDatatxt);
    const [followers, setFollowers] = useState(loadDatatxt);
    const [GraphData, setGraphdata] = useState(loadDatatxt);
    const [MapData, setMapData] = useState(loadDatatxt);
    const [MapColor, setMapColor] = useState(loadDatatxt);
    const noDatatxt = "Data is not available"; // Incase, Server does not respond , null or undefined 

    // Data for widget
    const loadData = async () => {
        const raw_data = await fetch('/get_data', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await raw_data.json();
        setRevenue(data.revenue);
        setActivity(data.activity);
        setUploads(data.uploads);
        setFollowers(data.followers);
        console.log('Data loaded is : ', data);
    }
    // Data for Barchart & DoughnutChart 
    const loadGraphData = async () => {
        const raw_data = await fetch('/get_graph_data', {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await raw_data.json();
        setGraphdata(data);
        console.log('Graph data : ', data);
    }
    // Data for HeatMap
    const loadMapData = async () => {
        const raw_data = await fetch('/get_map_data', {
            method: 'GET',
            mode:'cors',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await raw_data.json();
        setMapData(data.mapData);
        setMapColor(data.mapColor);
        console.log('Map data : ', data);
    }
    // For API fetching
    useEffect(() => { 
        loadData();
        loadGraphData();
        loadMapData();
    }, []);



    return (
    <div className="Page" >
        <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        <TopNav title={'React Dashboard'}/>
    <motion.div initial={{y:-450}} animate={{y:10}} transition={{delay:0.3,duration:0.4}}>
     <Container style={{position:'relative',top:'20px'}} fluid>
                <Row>
                   
                <Col sm><CardUI width="20rem" title="Revenue" data={revenue || noDatatxt} icon={<Icon.CashCoin style={{ color: 'green' }} />} /> </Col>
                <Col sm><CardUI width="20rem" title="Activity" data={activity || noDatatxt} icon={<Icon.Activity style={{ color: 'blue' }} />} /> </Col>
                <Col sm><CardUI width="20rem" title="Uploads" data={uploads || noDatatxt} icon={<Icon.CloudArrowUp style={{ color: '#ADD8E6' }} />} /></Col>
                <Col sm><CardUI width="20rem" title="Followers" data={followers || noDatatxt} icon={<Icon.People style={{ color: "#FF69B4" }} />} /> </Col>
               </Row>
      </Container>
      </motion.div>

      <Container style={{position:'relative',top:'100px'}} fluid>
       <motion.div initial={{ y: 500 }} animate={{ y: 10 }} transition={{ delay: 0.5, duration: 0.5 }} >
        <Row>
         {/* Here, icon is not bootstrap-icons, but Defined components passed as props to CardUI component*/}
                    <Col sm><CardUI title="Bar Graph" width="20rem" icon={<BarChart data={GraphData || noDatatxt} />} /> </Col>
                    <Col sm><CardUI title="World Map" width="20rem" icon={<WorldMap data={MapData || noDatatxt} color={MapColor || '#0000FF'} />} /> </Col>
                    <Col sm><CardUI title="Pie Chart" width="20rem" icon={<DoughnutChart data={GraphData || noDatatxt} />} /> </Col>
        </Row>
       </motion.div>
     </Container>
            <div style={{ position: "relative", top: '200px' }}><BottomNav/></div>
    </div>
     )
}

export default MainPage;