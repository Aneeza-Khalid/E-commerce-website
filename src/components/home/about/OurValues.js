import './OurValues.css';
import React from 'react';
import  {Col, Row, Container } from 'react-bootstrap';

export default function OurValues(){
    return(
        <>
        <Container fluid className='our-values pt-3 pb-5 about-gap'>
        <Container  className='about-gap mb-5'>
            <Row>
                <Col lg={4} xs={12}>
                <div className='our-values-left'>
                    <h5>Our Values</h5>
                    <h1 className='mt-4'>Fundamental Principles That Guides Us</h1>
                </div>
                </Col>
                <Col lg={8} xs={12}>
                <Row>
                    <Col md={6} xs={12}>
                     <div className='pe-3 our-values-card mt-5'>
                        <h5 >01</h5>
                        <div className='card-number-line'></div>
                        <h4 className='mt-3'>Innovation</h4>
                        <p className='mt-3'>We embrace innovation and continuously seek new technologies and techniques to push the boundaries of aerial photography and videography.</p>
                     </div>
                    </Col>
                    <Col md={6} xs={12}>
                     <div className='pe-3 our-values-card mt-5'>
                        <h5>02</h5>
                        <div className='card-number-line'></div>
                        <h4 className='mt-3'>Safety</h4>
                        <p className='mt-3'>We adhere to strict safety protocols and guidelines, ensuring a secure environment for both our team and the public.</p>
                     </div>
                    </Col>
                    <Col md={6} xs={12}>
                     <div className='pe-3 our-values-card mt-5'>
                        <h5>03</h5>
                        <div className='card-number-line'></div>
                        <h4 className='mt-3'>Creativity</h4>
                        <p className='mt-3'>Our team of creative professionals brings imagination to life, transforming ordinary moments into extraordinary experiences through the lens of our drones.</p>
                     </div>
                    </Col>
                    <Col md={6} xs={12}>
                     <div className='pe-3 our-values-card mt-5'>
                        <h5>04</h5>
                        <div className='card-number-line'></div>
                        <h4 className='mt-3'>Collaboration</h4>
                        <p className='mt-3'>We believe in the power of collaboration. We actively engage with our clients, understanding their vision and working together to achieve their goals.</p>
                     </div>
                    </Col>
                </Row>
                </Col>
            </Row>
            </Container>
            </Container>

        </>
    )
}