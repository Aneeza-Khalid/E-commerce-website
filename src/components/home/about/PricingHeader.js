import './PricingHeader.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



export default function PricingHeader(){
    return(
    <>
     <Container fluid className='Pricing-bg-image'>
        <Row className =' about-us-title d-flex flex-direction column text-center align-items-center justify-content-center'>
          <h1 className='text-capitalize'>
          simple monthly plans
          </h1>
            <h5 className='text-align-center'>
            Select a plan that aligns with your specific requirements and financial considerations.
            </h5>
        </Row>
        </Container>
     </>
        
       


    )
}