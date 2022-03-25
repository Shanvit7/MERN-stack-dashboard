import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SideBar from "./SideBar.js";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";

function MainPage() {
    return (
        <div>
            <TopNav />
            <SideBar />
            <BottomNav />
        </div>
    )

}

export default MainPage;