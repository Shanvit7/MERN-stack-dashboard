import React from "react";
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);


function BarChart(props){
const chartConfigs = {
    type: "column2d", // The chart type
    width: "300", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
        // Chart Configuration
        chart: {
            caption: "Countries With Most Oil Reserves [2021-22]",    //Set the chart caption
            subCaption: "In MMbbl = One Million barrels",             //Set the chart subcaption
            xAxisName: "Country",           //Set the x-axis name
            yAxisName: "Reserves (MMbbl)",  //Set the y-axis name
            numberSuffix: "K",
            theme: "fusion"                 //Set the theme chart
        },
        // Chart Data 
        data: props.data
    }
};

return(
    <ReactFC {...chartConfigs} />
)

}

export default BarChart;



