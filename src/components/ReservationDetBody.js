import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './Home.css';
import './Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function ReservationDetBody(){
    return(
    <div>
        <Container>
            <h5 align = 'left' className='Head'> My Profile </h5>
        
            <h5 align = 'center'> Reservation Detail View</h5>

            <Col className="col-12 col-sm-6" align = 'center'>
                <Row>
                    <label>Reservation ID: </label>
                    <input />
                </Row>
                <Row>
                    <label>Start Date: </label>
                    <input />
                </Row>
                <Row>
                    <label>End Date: </label>
                    <input />
                </Row>
                <Row>
                    <label>From Location: </label>
                    <input />
                </Row>
                <Row>
                    <label>To Location: </label>
                    <input />
                </Row>   
                
            </Col>
            

        </Container>
    </div>
    );
}

export default ReservationDetBody;