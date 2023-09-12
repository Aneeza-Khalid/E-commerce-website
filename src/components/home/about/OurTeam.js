import React from 'react';
import  {Col, Row, Container } from 'react-bootstrap';

import './OurTeam.css';

export default function OurTeam(){
    return(
        <>
        <Container className='about-gap'> 
            <Row className='our-team'>
                <h5>Unleashing your aerial potential</h5>
                <h1 className='mt-4'>Our Team</h1>
            </Row>
            <Row>
                <Col lg={4} md={6} xs={12}>
                    <div className='team-card p-3 mt-5'>
                        <div className='image-card'>
                        <img src="https://i.ibb.co/7kFyZ52/person-3.webp" alt="person-3" border="0" />
                        </div>
                        <Row>
                            <Col xs={8} className='team-name'>
                                <h2 className='mt-4'>Jacob Jones</h2>
                                <p>Pilot</p>
                            </Col>
                            <Col xs={4}>
                                <div className='d-flex mt-4'>
                                <a href='https://www.instagram.com/' className='me-2'> Insta
                                </a>
                                <a href='https://twitter.com/'> Twit
                                </a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={4} md={6} xs={12}>
                    <div className='team-card p-3 mt-5'>
                        <div className='image-card'>
                        <img src="https://i.ibb.co/LYSmmzq/person-2.webp" alt="person-2" border="0" />
                        </div>
                        <Row>
                            <Col xs={8} className='team-name'>
                                <h2 className='mt-4'>Jacob Jones</h2>
                                <p>Photographer</p>
                            </Col>
                            <Col xs={4}>
                                <div className='d-flex mt-4'>
                                <a href='https://www.instagram.com/' className='me-2'> Insta
                                </a>
                                <a href='https://twitter.com/'> Twit
                                </a>
                                </div>
                            </Col>
                        </Row>

                    </div>
                </Col>
                <Col lg={{span:'4', offset:'0'}} md={{span:'6', offset:'3'}} xs={{span:'12', offset:'0'}}>
                    <div className='team-card p-3 mt-5'>
                        <div className='image-card'>
                        <img src="https://i.ibb.co/Ybn8Mfz/1-person.webp" alt="1-person" border="0" />
                        </div>
                        <Row>
                            <Col xs={8} className='team-name'>
                                <h2 className='mt-4'>Jacob Jones</h2>
                                <p>Pilot</p>
                            </Col>
                            <Col xs={4}>
                                <div className='d-flex mt-4'>
                                <a href='https://www.instagram.com/' className='me-2'> Insta
                                </a>
                                <a href='https://twitter.com/'> Twit
                                </a>
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