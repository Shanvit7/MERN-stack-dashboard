import React from "react";
import { Modal,Button } from "react-bootstrap";
import { useState } from "react";

const LogOutBox=()=>{
    const [show,setShow]=useState(true);
    const handleClose=()=> setShow(false);
    return(
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard="false">
        <Modal.Header>
            <Modal.Title>Log Out</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Are you sure you want to log out??
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" href='/dashboard' >Close</Button>
            <Button variant="success" onClick={handleClose}>
                Proceed
            </Button>
        </Modal.Footer>
    </Modal>
)
}

export default LogOutBox;