import React from "react";
import './App.css'
import * as Icon from 'react-bootstrap-icons';
import{Card,Button} from 'react-bootstrap';

function CardUI(props){
    return(
        <Card style={{ width: props.width}}>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
                <Card.Title style={{ fontSize: '50px'}}>{props.icon}{' '}{props.data}</Card.Title>
                <Card.Footer>
                <Button variant="primary"><Icon.ArrowCounterclockwise/>Update</Button>
                </Card.Footer>
        </Card.Body>

    </Card>
    )
}

export default CardUI;