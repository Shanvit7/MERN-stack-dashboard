import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SideBar from "./SideBar.js";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import WidgetBox from "./WidgetBox";
import * as Icon from 'react-bootstrap-icons';
import { blueGrey } from "@mui/material/colors";


function MainPage() {
    return (
        <div>
            <TopNav />
            <SideBar />
            <WidgetBox top="40px" left="290px" value="500" title="Revenue" sign={<Icon.CurrencyDollar/>} icon={<Icon.CashCoin id="widget-icon" style={{color:"green"}} />} />
            <WidgetBox top="-110px" left="600px" value="1000" title="Activity" icon={<Icon.Activity id="widget-icon" style={{color:"blue"}}/>} />
            <WidgetBox top="-260px" left="910px" value="300" title="Uploads" icon={<Icon.CloudArrowUp id="widget-icon" style={{ color:"#ADD8E6"}}  /> } />
            <WidgetBox top="-410px" left="1225px" value="600" title="Followers" icon={<Icon.People id="widget-icon" style={{ color:"#FF69B4"}} />} />
            <BottomNav />
        </div>
    )

}

export default MainPage; 