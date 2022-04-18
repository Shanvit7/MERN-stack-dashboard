import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { motion } from 'framer-motion/dist/framer-motion';


const BottomNav=()=>{

    return (
        <Navbar bg="light" expand='sm'>
            <motion.div whileHover={{scale:1.2}}><Nav.Link href='/gmap'>Visit us</Nav.Link></motion.div>
            <motion.div whileHover={{ scale: 1.2 }}><Nav.Link href='/dashboard'>Home</Nav.Link></motion.div>
            <motion.div whileHover={{ scale: 1.2 }}><Nav.Link href='/void'>Products</Nav.Link></motion.div>
            <motion.div whileHover={{ scale: 1.2 }}><Nav.Link href='/about'>About Us</Nav.Link></motion.div>
        </Navbar>
    )
}

export default BottomNav;