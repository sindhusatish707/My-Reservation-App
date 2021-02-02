//different heading to filter the tables

import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FilterValues(){

        const [selectedStartDate, setSelectedStartDate] = useState(null)
        const [selectedEndDate, setSelectedEndDate] = useState(null)
        const [selectedFromLoc, setSelectedFromLoc] = useState("From Location")
        const [selectedToLoc, setSelectedToLoc] = useState("To Location")
        const [selectedBookingChannel, setSelectedBookingChannel] = useState("Booking Channel")

        return(
            <Container className = 'Head' expand='md'>
            <Row>
            <Col>
                <h4>Filter By : </h4>
            </Col>
            </Row>
            <Row>
            <Col>
                    <DatePicker
                    placeholderText="Start Date"
                    selected={selectedStartDate}
                    onChange={date => setSelectedStartDate(date)}
                    dateFormat='yyyy/MM/dd'
                    />
            </Col>
            
            <Col>

                <Button variant="outline-dark" as = "select"
                margin = '100px'
                selected = {selectedFromLoc} 
                onChange={data => setSelectedFromLoc(data)}>
                    <option>From Location</option> 
                    <option>Dachau</option>
                    <option>Munich</option>
                    <option>Salzburg</option>
                </Button>
            </Col>
            <Col>
                <Button variant="outline-dark"  as = "select" 
                selected = {selectedToLoc}
                onChange={data => setSelectedToLoc(data)}>
                    <option>To Location</option>
                    <option>Dachau</option>
                    <option>Munich</option>
                    <option>Salzburg</option>
                </Button>
            </Col>
            <Col>
                <Button variant="outline-dark" as = "select" 
                selected = {selectedBookingChannel}
                onChange={data => setSelectedBookingChannel(data)}>
                    <option>Booking Channel</option>
                    <option>App</option>
                    <option>Call</option>
                </Button>
            </Col>
            </Row>
            <Row>
                <Col>                
                        <DatePicker
                        placeholderText="End Date"
                        selected={selectedEndDate}
                        onChange={date => setSelectedEndDate(date)}
                        dateFormat='yyyy-MM-dd'
                        />
                </Col>
            </Row>

            </Container>
);

}


export default FilterValues;