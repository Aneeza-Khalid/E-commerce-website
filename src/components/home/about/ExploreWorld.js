import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './ExploreWorld.css';
import  {Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';




export default function ExploreWolrd(){
    return(
        <>
        <Container className='about-gap'>
            <Row>
                <Col lg={6} xs={12} className='p-0'>
                    <div className='explore-world-image'>
                    <img src="https://i.ibb.co/Qf1MFSK/foresr-footage.webp" alt="foresr-footage" border="0"/>
                    </div>
                </Col>
                <Col lg={6} xs={12} >
                    <div className='explore-world mt-5 ps-3'>
                        <h1>
                        Explore The World From Above
                        </h1>
                        <p>
                        Elevate your content with our high-quality drone footage that brings your vision to life.
                        </p>
                        <h6>
                        Take your storytelling to new heights with our immersive drone photography and videography services. And explore unseen angles and capture unique moments with our expert drone operators.
                        </h6>
                        <a href='#abouts'><Button className='protfolio-btn py-2 px-4 mt-4 mb-4'> Learn More</Button></a>
                    </div>
                </Col>
            </Row>
            <Row>
            <Col md={6} xs={12}>
                    <Row>
                        <Col xs={6}>
                            <div className='about-numbers'>
                            <h1>4K</h1>
                            <p>Photo Resolution</p>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className='about-numbers'>
                            <h1>1000+</h1>
                            <p>Projects Done</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={6} xs={12} className='p-0'>
                <div className='blue-border'>
                <Row>
                        <Col xs={6}>
                        <div className='about-numbers-1 ps-4'>
                            <h1>6+</h1>
                            <p>Years Experiance</p>
                        </div>
                        </Col>
                        <Col xs={6}>
                            <div className='about-numbers-1'>
                            <h1>40+</h1>
                            <p>Annual Events</p>
                            </div>
                        </Col>
                    </Row>
                    </div>
                </Col>
            </Row>
               
        </Container>
        
        
        </>
    )
}