import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TasksNavbar = () => {

    const getUsername = localStorage.getItem('user-name') || '';
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/auth/login');
    }

    return (
        <React.Fragment>
            <Navbar bg="dark" expand="lg" className="navbar-dark">
                <Container>
                    <Navbar.Brand>Todo Tasks application</Navbar.Brand>

                    <Navbar.Text>
                        <span style={{borderRight: '1px solid #aaa', marginRight: '10px', paddingRight: '7px'}}>{getUsername}</span>
                        <Button onClick={ handleLogout }>Logout</Button>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}

export default TasksNavbar;
