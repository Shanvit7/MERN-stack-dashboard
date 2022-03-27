import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SideBar from "./SideBar.js";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import WidgetBox from "./WidgetBox";
import * as Icon from 'react-bootstrap-icons';


import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ChartData from './ChartData.js';



ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
// Create a JSON object to store the chart configurations
const chartConfigs = {
    type: "column2d", // The chart type
    width: "300", // Width of the chart
    height: "300", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
        // Chart Configuration
        chart: {
            caption: "Countries With Most Oil Reserves [2017-18]",    //Set the chart caption
            subCaption: "In MMbbl = One Million barrels",             //Set the chart subcaption
            xAxisName: "Country",           //Set the x-axis name
            yAxisName: "Reserves (MMbbl)",  //Set the y-axis name
            numberSuffix: "K",
            theme: "fusion"                 //Set the theme for your chart
        },
        // Chart Data - from step 2
        data: ChartData
    }
};

function BarChart() {
    return (<ReactFC {...chartConfigs} />);
}












function MainPage(){
    return (
        <div>
            <TopNav />
            <SideBar />
            <WidgetBox top="100px" left="300px" width="280px" height="150px" value="500" title="Revenue" drawLine="widget-line" drawUpdate="widget-update" sign={<Icon.CurrencyDollar />} icon={<Icon.CashCoin id="widget-icon" style={{ color: "green"}} />} />
            <WidgetBox top="-50px" left="600px" width="280px" height="150px" value="1000" title="Activity" drawLine="widget-line" drawUpdate="widget-update" icon={<Icon.Activity id="widget-icon" style={{ color: "blue" }} />} />
            <WidgetBox top="-200px" left="910px" width="280px" height="150px" value="300" title="Uploads" drawLine="widget-line" drawUpdate="widget-update" icon={<Icon.CloudArrowUp id="widget-icon" style={{ color: "#ADD8E6" }} />} />
            <WidgetBox top="-350px" left="1225px" width="280px" height="150px" value="600" title="Followers" drawLine="widget-line" drawUpdate="widget-update" icon={<Icon.People id="widget-icon" style={{ color: "#FF69B4" }} />} />
            <BottomNav />
        </div>
    )

}

export default MainPage; 