import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './AboutUsHeader.css';

export default function AboutUsHeader(){
    return(
      <>
     
      <Container fluid className='abt-bg-image'>
        <Row className =' about-us-title d-flex flex-direction column text-center align-items-center justify-content-center'>
          <h1>
          About Us
          </h1>
            <h5 className='text-align-center'>
            We are a dedicated team of enthusiasts who have come together to create a hub for drone lovers, hobbyists, and professionals alike
            </h5>
        </Row>
        </Container>
      </>
    )
       
    
}