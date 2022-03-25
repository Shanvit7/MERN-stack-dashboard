import React from "react";
import { } from "react-bootstrap";
import './App.css';
import * as Icon from 'react-bootstrap-icons';

function BottomNav(){
return(
   <div className="BottomNav">
   <a id="Home">Home</a>
   <a id="Company">Company</a>
   <a id="Portfolio">Portfolio</a>
   <a id="Blog">Blog</a>
   <a id="tagline"><Icon.Robot size={25}/> Industry 4.0</a>
   </div>
)
}

export default BottomNav;