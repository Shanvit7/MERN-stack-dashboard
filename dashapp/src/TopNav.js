import React from "react";
import { } from "react-bootstrap";
import './App.css';
import * as Icon from 'react-bootstrap-icons';

function TopNav() {
    return (

        <div className="TopNav">
            <a id="DashBoard">Dashboard</a>
            <a id="Notification"><Icon.AppIndicator /></a>
            <a id="Search"><Icon.Search /></a>
            <a id="Account">Account</a>
            <select id="DropDown">
                <option>DropDown</option>
                <option>Value 1</option>
                <option>Value 2</option>
                <option>Value 3</option>
            </select>
            <a id="LogOut">Logout<Icon.BoxArrowInRight /></a>
        </div>
    )

}

export default TopNav;