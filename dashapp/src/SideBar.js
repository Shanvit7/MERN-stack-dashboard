import React from "react";
import './App.css';
import * as Icon from 'react-bootstrap-icons';

function SideBar(){
    return (
    <div className="SideBar">
    <h1>React</h1>
    <a href="/error"><Icon.PieChart className="Icon" />Dashboard</a>
    <a href="/error"><Icon.PersonCircle className="Icon" />User Profile</a>
    <a href="/error"><Icon.ListColumns className="Icon" />Data List</a>
    <a href="/error"><Icon.GeoAltFill className="Icon" />Location</a>
    <a href="/error"><Icon.BellFill className="Icon" />Notification</a>
    <a href="/error"><Icon.ShareFill className="Icon"/>Share</a>
    </div>
    )

}

export default SideBar;