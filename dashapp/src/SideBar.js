import React from 'react';
import{stack as Menu} from 'react-burger-menu';
import * as Icon from 'react-bootstrap-icons';
import './SideBar.css';


const SideBar=()=>{
   return (
     <Menu>
         <a href="/dashboard"><Icon.PieChart />{' '}Dashboard</a>
         <a href="/about"><Icon.Person />{' '}About developer</a>
         <a href="/error"><Icon.ListColumns />{' '}To do List</a>
         <a href="/gmap"><Icon.GeoAlt />{' '}Location</a>
         <a href="/error"><Icon.BellFill />{' '}Notifications</a>
         <a href="/error"><Icon.ShareFill />{' '}Share</a>
     </Menu>
   )
}

export default SideBar;
