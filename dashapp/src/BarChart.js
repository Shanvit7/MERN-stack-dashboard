import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import ChartData from './ChartData.js';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);
// Create a JSON object to store the chart configurations
const chartConfigs = {
    type: "column2d", // The chart type
    width: "700", // Width of the chart
    height: "400", // Height of the chart
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

function BarChart(){
    return(<ReactFC {...chartConfigs}/>);
}

export default BarChart();