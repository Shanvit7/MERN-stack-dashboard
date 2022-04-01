import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNav from "./TopNav";
import CardUI from "./CardUI";
import * as Icon from 'react-bootstrap-icons';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';
import WorldMap from "./WorldMap";
 



function MainPage(){
    return (
        <div className="MainPage"> 
            <TopNav/>
            <div className="flexContainer">
                <CardUI width="20rem" title="Revenue" data="$500" icon={<Icon.CashCoin style={{color:'green'}}/>}/>
                <CardUI width="20rem" title="Activity" data="60K+" icon={<Icon.Activity style={{color:'blue'}}/>}/>
                <CardUI width="20rem" title="Uploads" data="30K+" icon={<Icon.CloudArrowUp style={{ color:'#ADD8E6'}}/>}/>
                <CardUI width="20rem" title="Followers" data="120K+" icon={<Icon.People style={{ color: "#FF69B4" }} />} />
            </div>

            <div className="flexGraph">
                <CardUI title="Bar Graph" width="30rem" icon={<BarChart/>}/>
                <CardUI title="World Map" width="30rem" icon={<WorldMap/>}/>
                <CardUI title="Pie Chart" width="30rem" icon={<DoughnutChart/>}/>
            </div>


        </div>
    )

}

export default MainPage; 
