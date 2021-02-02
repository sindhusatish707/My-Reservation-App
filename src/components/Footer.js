
import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import '../App.css';


class Footer extends Component {
    render(){
    return (
        <Navbar bg="light" expand="md" className = 'Footer'>
        <Navbar sticky="bottom" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Col sm={{ span: 10, offset: 10 }}>
            <Button variant="outline-dark" disabled>View Reservations</Button>
        </Col>
        
        
        
    
        </Navbar.Collapse>
    </Navbar>
    );
}
}

export default Footer;