import React from "react";
import '../StyleSheets/App.css';
import * as Icon from 'react-bootstrap-icons';
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { motion } from 'framer-motion/dist/framer-motion';


function TopNav(props) {

    return (
        <Navbar bg="light" expand='sm'>
            <Container>
                <Navbar.Brand className='responsive-title' style={{ color: 'rgb(0, 102, 255)' }}>{props.title}</Navbar.Brand> {/* Title on Top NavBar */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* For makking responsive*/}
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <motion.div whileHover={{ scale: 1.3 }}><Nav.Link href='/dashboard' id='ColorOnNav' className="px-3">Home{' '}<Icon.HouseFill /></Nav.Link></motion.div>
                        <motion.div whileHover={{ scale: 1.3 }}><Nav.Link href="/notifications" id='ColorOnNav' className='px-3'>Notifications{' '}<Icon.AppIndicator /></Nav.Link></motion.div>
                        <motion.div whileHover={{ scale: 1.3 }}><Nav.Link href="/void" id='ColorOnNav' className='px-3'>Search{' '}<Icon.Search /></Nav.Link></motion.div>
                        <NavDropdown title="Dropdown" id='ColorOnNav' className='px-3'>
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <motion.div whileHover={{ scale: 1.3 }}><Nav.Link href="/logout" id='ColorOnNav' className='px-3'>LogOut<Icon.BoxArrowInRight /></Nav.Link></motion.div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNav;
