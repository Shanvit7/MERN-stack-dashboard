import React from 'react';
import TopNav from './TopNav';
import SideBar from './SideBar';
import BottomNav from './BottomNav';
import {Button,Card,Form, Modal } from 'react-bootstrap';
import './App.css';
import { useState } from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Icon from 'react-bootstrap-icons';




const ToDoPage=()=>{

    const [tasks, setTask] = useState([{
        text: "This is a sampe todo",
        isDone: false
    }]);

    const addTask = text => {
        const newTask = [...tasks, { text }];
        setTask(newTask);
    };

    const TaskDone = index => {
        const newTask = [...tasks];
        newTask[index].isDone = true;
        setTask(newTask);
    };


const ToDoForm = ({ addTask }) => {

        const [value, setValue] = React.useState("");

        const handleSubmit = event => {
            event.preventDefault();
            if (!value) return;
            addTask(value);
            setValue("");
        };

        return (
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label><b>{(tasks.length === 0) ? "No tasks to do !" : (tasks.length === 1) ? "You have only 1 task" : `You have added ${tasks.length} tasks`}</b></Form.Label>
                    <Form.Control type="text" className="input" value={value} onChange={event => setValue(event.target.value)} placeholder="Add tasks here..." />
                </Form.Group>
                <motion.div animate={{y:10}}>
                <Button variant="primary mb-3" type="submit" style={{backgroundColor:'green'}}>
                    <motion.div whileHover={{ scale: 0.8 }}>
                    Add <Icon.PlusCircle/>
                    </motion.div>
                </Button>
                </motion.div>
            </Form>
        )

}

const RemoveTaskbtn =(props)=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow =()=> setShow(true)

    return (
        <>
        <Button variant="outline-danger" onClick={handleShow}><Icon.XLg/></Button>
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard="false">
            <Modal.Header>
                <Modal.Title>Remove task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to remove the selected task ?
                Please click on "Remove" to continue
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-primary" onClick={handleClose} >Close</Button>
                <Button variant="outline-danger" onClick={() => { const newTask = [...tasks]; newTask.splice(props.index, 1); setTask(newTask); }}>
                    Remove
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    )
}

const Todo=({ task, index, TaskDone})=>{
        return (
            <motion.div className="tasks" animate={{y:15}}>
                <span style={{ textDecoration: task.isDone ? "line-through" : "" }}>{task.text}</span>
             <motion.div whileHover={{scale:1.2}} whileTap={{scale:0.8}}>
                <Button variant="outline-success" onClick={() => TaskDone(index)}><Icon.CheckLg/></Button>{' '}
                <RemoveTaskbtn index={index}/>
             </motion.div>
            </motion.div>
            );
}

     return(
        <div className="Page">
            <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
            <TopNav title={'To Do list'}/>

            <div className="container">
                <motion.h1 initial={{y:-250}}  animate={{y:10,color:'rgb(0,102,255)'}} transition={{delay:0.5,duration:0.5}} className="text-center mb-4">Tasks to do ...</motion.h1>
                <ToDoForm  addTask={addTask} />
                <div>
                    {tasks.map((task, index) => (
                        <Card>
                            <Card.Body>
                                <Todo
                                    key={index}
                                    index={index}
                                    task={task}
                                    TaskDone={TaskDone}
                                />
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>

       
            <div style={{ position: "relative", top: '500px' }}>
                <BottomNav />
            </div>
        </div>
    )

};

export default ToDoPage;