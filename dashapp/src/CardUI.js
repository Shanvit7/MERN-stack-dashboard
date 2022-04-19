import React from "react";
import './App.css'
import * as Icon from 'react-bootstrap-icons';
import{Card,Button} from 'react-bootstrap';
import { motion } from 'framer-motion/dist/framer-motion';

// Box for displaying data in Dashboard

function CardUI(props){
    return(
        <motion.div  whileHover={{scale:1.1}}>
        <Card style={{ maxWidth: props.width}}>
        <Card.Header>{props.title}</Card.Header>
        <Card.Body>
                <Card.Title style={{ fontSize: '50px',justifyContent:'center',alignItems:'center'}}>{props.icon}{' '}{props.data}</Card.Title>
                <Card.Footer>
                <Button variant="primary"><Icon.ArrowCounterclockwise/>Update</Button>
                </Card.Footer>
        </Card.Body>

    </Card>
    </motion.div>
    )
}

export default CardUI;