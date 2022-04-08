import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNav from "./TopNav";
import CardUI from "./CardUI";
import * as Icon from 'react-bootstrap-icons';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import WorldMap from "./WorldMap";
import { useState } from 'react';
import { use } from "express/lib/application";
 



function MainPage(){
    const loadDatatxt = 'Data is loading...';
    const [revenue, setRevenue] = useState(loadDatatxt);
    const [activity, setActivity]  = useState(loadDatatxt);
    const [uploads, setUploads] = useState(loadDatatxt);
    const [followers,setFollowers] = useState(loadDatatxt);
    const [GraphData,setGraphdata] = useState(loadDatatxt);
    const [MapData,setMapData] = useState(loadDatatxt);
    const [MapColor,setMapColor] = useState(loadDatatxt);
    const noDatatxt = "Data is not available";


    const loadData = async () => {
        const raw_data = await fetch('http://localhost:8080/get_data', { method: 'GET', headers: { "Content-Type": "application/json" } });
        const data = await raw_data.json();
        setRevenue(data.revenue);
        setActivity(data.activity);
        setUploads(data.uploads);
        setFollowers(data.followers);
        console.log('Data loaded is : ', data);
    }

    const loadGraphData=async()=>{
        const raw_data = await fetch('http://localhost:8080/get_graph_data', { method: 'GET', headers: { "Content-Type": "application/json" } });
        const data = await raw_data.json();
        setGraphdata(data);
        console.log('Graph data : ', data);
    }

    const loadMapData = async()=>{
        const raw_data = await fetch('http://localhost:8080/get_map_data', { method: 'GET', headers: { "Content-Type": "application/json" } });
        const data = await raw_data.json();
        setMapData(data.mapData);
        setMapColor(data.mapColor);
        console.log('Map data : ',data);
    }

    useEffect(()=>{
        loadData();
        loadGraphData();
        loadMapData();
    },[]);



    return (
        <div className="MainPage"> 
            <TopNav/>
            <div className="flexContainer">
                <CardUI width="20rem" title="Revenue" data={revenue || noDatatxt} icon={<Icon.CashCoin style={{color:'green'}}/>}/>
                <CardUI width="20rem" title="Activity" data={activity || noDatatxt} icon={<Icon.Activity style={{color:'blue'}}/>}/>
                <CardUI width="20rem" title="Uploads" data={uploads || noDatatxt} icon={<Icon.CloudArrowUp style={{ color:'#ADD8E6'}}/>}/>
                <CardUI width="20rem" title="Followers" data={followers || noDatatxt} icon={<Icon.People style={{ color: "#FF69B4" }} />} />
            </div>

            <div className="flexGraph">
                <CardUI title="Bar Graph" width="30rem" icon={<BarChart data={GraphData || noDatatxt}/>}/>
                <CardUI title="World Map" width="30rem" icon={<WorldMap data={MapData || noDatatxt} color={MapColor || '#0000FF'} />}/>
                <CardUI title="Pie Chart" width="30rem" icon={<DoughnutChart data={GraphData || noDatatxt}/>}/>
            </div>


        </div>
    )

}

export default MainPage; 
