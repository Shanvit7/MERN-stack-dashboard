import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Alert} from "react-bootstrap";


function ErrorPage() {
    return (
        <>
            <h1> This page is used for testing react-routing </h1>
            <h2>...Also, You have run into ERROR!</h2>
            <Link to='/back'><Button variant="secondary">Return</Button></Link>
        </>
    )
}

export default ErrorPage;