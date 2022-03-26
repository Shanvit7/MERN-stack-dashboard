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
                width: 280,
                height: 150,
                backgroundColor: 'rgb(255,255,240)'
            }}
        >
            <InputLabel id="widget-1-title">{props.title}</InputLabel>
            <InputLabel id="widget-1-value">{props.sign}{props.value}</InputLabel>
            {props.icon}
            <div className="line"></div>
            <Button variant="text" id="widget-update"><Icon.ArrowClockwise />Update</Button>
        </Box>
    )
}

export default WidgetBox;