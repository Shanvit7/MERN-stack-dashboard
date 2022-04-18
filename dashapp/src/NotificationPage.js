import React from "react";
import TopNav from "./TopNav";
import BottomNav from "./BottomNav";
import * as Icon from 'react-bootstrap-icons';
import SideBar from "./SideBar";
import './App.css'
import { Toast, ToastContainer} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from 'framer-motion/dist/framer-motion';
import { useState } from "react";
import './App.css';

const Notification = (props) => {
  const [alert, setAlert] = useState();
  const closeAlert = () => { setAlert(!alert) };


  return (
    <motion.div whileHover={{scale:1.1}} drag dragConstraints={{left:0,right:0,top:0,bottom:0}} dragElastic={1}>
    <Toast show={alert} onClose={closeAlert}>
      <Toast.Header>
        <Icon.ChatLeftDots className="rounded me-2" />
        <strong className="me-auto">Message</strong>
        <small className="text-muted">{props.whileAgo}</small>
      </Toast.Header>
      <Toast.Body>
        {props.message}
      </Toast.Body>
    </Toast>
    </motion.div>
  )
}


const NotificationPage=()=>{
 
  return(
      <div className="Page">
      <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
      <TopNav title={'Notifications'}/>
      <motion.div className='responsive-alert' style={{position:'absolute',x:'600px'}} initial={{y:-1500}} animate={{y:20}} transition={{delay:0.5,duration:0.5}}>
          <ToastContainer  >
            <Notification whileAgo={'Few seconds ago...'} message={'This website still needs improvement!'} />
            <Notification whileAgo={'Few minutes ago...'} message={'This is dummy alert'} />
            <Notification whileAgo={'2 hours ago...'} message={'This is dummy alert'} />
            <Notification whileAgo={'4 hours ago...'} message={'This is dummy alert'} />
            <Notification whileAgo={'6 hours ago...'} message={'This is dummy alert'} />
            <Notification whileAgo={'8 hours ago...'} message={'This is dummy alert'} />
            <Notification whileAgo={'2 Days ago...'} message={'Welcome to React Dashboard !'}/>
          </ToastContainer>
      </motion.div>
      <div style={{ position: "relative", top: '700px' }}>
        <BottomNav/>
      </div>
      </div>
  )

}

export default NotificationPage;