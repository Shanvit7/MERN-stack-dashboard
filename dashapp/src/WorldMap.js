import React from 'react';
import ReactDOM from 'react-dom';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

//Import FusionMaps
import FusionMaps from 'fusioncharts/maps/es/fusioncharts.world';
import World from 'fusioncharts/fusioncharts.maps'

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, FusionMaps, World, FusionTheme);

function WorldMap(props){
const chartConfigs = {
    type: 'world', // The chart type
    width: '300', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
        // Map Configuration
        "chart": {
            "caption": "Average Annual Population Growth",
            "subcaption": " 1970-2022",
            "numbersuffix": "%",
            "includevalueinlabels": "1",
            "labelsepchar": ": ",
            "entityFillHoverColor": "#FFF9C4",
            "theme": "fusion"
        },
        // Aesthetics; ranges synced with the slider
        "colorrange": props.color,
        // Source data as JSON --> id represents countries of the world.
        "data": props.data
    }
}
 
return (<ReactFC {...chartConfigs}/>)

}

export default WorldMap;
