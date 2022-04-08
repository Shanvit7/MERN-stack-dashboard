import React from "react";
import './App.css';
import * as Icon from 'react-bootstrap-icons';
import { Navbar,Container, NavLink,NavDropdown,Nav } from "react-bootstrap";


function TopNav(){

    return (

        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>React Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ms-auto">
                        <Nav.Link href="/error" id='ColorOnhover' className='px-3'>Notifications{' '}<Icon.AppIndicator /></Nav.Link>
                        <Nav.Link href="/error" id='ColorOnhover' className='px-3'>Search{' '}<Icon.Search /></Nav.Link>
                        <NavDropdown title="Dropdown" id='ColorOnhover' className='px-3'>
                            <NavDropdown.Item href="#action/1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3">Something</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/error" id='ColorOnhover' className='px-3'>LogOut<Icon.BoxArrowInRight /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNav;
