import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function HomeBody(){
    return(
        <div>
        <Container>
            <Row>
            <Col md={{ span: 8, offset: 5 }} className = 'Head'>
                {`WELCOME MESSAGE`}
            </Col>
        </Row>
  
        </Container>
        
</div>

        

);
}

export default HomeBody;