import React from "react";
import './App.css'
import * as Icon from 'react-bootstrap-icons';
import { Box, InputLabel, Button } from '@mui/material';
import { useState } from "react";

function WidgetBox(props) {
    return (

        <Box
            sx={{
                position: 'relative',
                top: props.top,
                left: props.left,
                width: props.width,
                height: props.height,
                backgroundColor: 'rgb(255,255,240)'
            }}
        >
            <InputLabel id="widget-1-title">{props.title}</InputLabel>
            <InputLabel id="widget-1-value">{props.sign}{props.value}</InputLabel>
            {props.icon}
            <div className={props.drawLine}></div>
            <Button variant="text" id={props.drawUpdate}><Icon.ArrowClockwise />Update</Button>
        </Box>
    )
}

export default WidgetBox;