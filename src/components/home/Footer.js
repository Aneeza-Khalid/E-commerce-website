import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


export default function Footer(){
    return (
        <>
        <Container fluid className='footer-background' >
            <Container>
            <Row className= 'text-center'> 
                <Col xs={12} >
                    <img className='mt-5'  src='https://assets.website-files.com/6450b31696e25f8aa6cdd7b0/64522ec803e23e80fd7d970b_white%20logo.svg' alt='drone'/>
                </Col>
                <Col xs={12} className='footer-text mt-5'>
                <h1>Let’s cooperate together</h1>
                <p className='pt-3'>Experience heightened speed, improved stability, and a complete suite of features.</p>
                </Col>
                <Col xs={12}>
                    <Link>
                    <Button className='footer-btn px-5 py-3'>Get a Free Quote</Button>
                    </Link>
                </Col>
                <hr className='footer-line mt-4'></hr>
           </Row>
            </Container>
            <Container>
            <Row>
                <Col md={5} >
                    <Row>
                        <Col md={12} className='p-0'>
                        <p className='social-media-pages'>© Drone. All Rights Reserved 2023.  <Link className='social-media-pages-link licensing'>Licensing</Link></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{span:'12', offset:'0'}} xs={{span:'8', offset:'2'}} className='p-0'>
                            <span className='social-media-pages' > <Link className='social-media-pages-link'>Template</Link > by <Link className='social-media-pages-link'>wCopilot</Link> </span>
                        <span className='social-media-pages  ps-0'> Powered by <Link className='social-media-pages-link'>Webflow</Link> </span>
                        </Col>
                    </Row>
                </Col>
                <Col className='p-0' md={{span:'7', offset:'0'}} xs={{span:'10', offset:'1'}}> 
                <Row className='mb-5'>
                <Col md={4} xs={12} className='p-0'>
                    <p className='social-media'>Check our social media-</p> </Col>
                <Col md={{span:'2', offset:'0'}} xs={3}> <Link className='social-media-link'>Linkdin</Link></Col>
                <Col md={{span:'2', offset:'0'}}  xs={{span:'3', offset:'1'}}> <Link className='social-media-link'>Youtube</Link></Col>
                <Col md={{span:'2', offset:'0'}}  xs={{span:'3', offset:'1'}}> <Link className='social-media-link'>Instagram</Link></Col>
                <Col md={{span:'2', offset:'0'}} xs={{span:'3', offset:'4'}}><Link className='social-media-link'>Twitter</Link></Col>
                </Row>
                </Col>
            </Row>
            </Container>
            </Container>
        </>
    )
}