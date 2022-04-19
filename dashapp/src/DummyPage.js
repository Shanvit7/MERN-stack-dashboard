import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";

// For links not in use.

function DummyPage() {
    return (
        <>
            <h1> This page was used for testing react-routing </h1>
            <h2>This is a dummy page .</h2>
            <Link to='/dashboard'><Button variant="secondary">Return</Button></Link>
        </>
    )
}

export default DummyPage;