import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';
import Button from 'react-bootstrap/Button';



export default function Footer(){
    return (
        <>
        <Container fluid className='footer-background' >
            <Container>
            <Row className= 'text-center'> 
                <Col xs={12} >
                    <a href='/'> <img  className='mt-5'  src='https://assets.website-files.com/6450b31696e25f8aa6cdd7b0/64522ec803e23e80fd7d970b_white%20logo.svg' alt='drone'/></a>
                </Col>
                <Col xs={12} className='footer-text mt-5'>
                <h1 >Let’s cooperate together</h1>
                <p className='pt-3'>Experience heightened speed, improved stability, and a complete suite of features.</p>
                </Col>
                <Col xs={12}>
                    <a href='/ContactUs'>
                    <Button  className='footer-btn px-4 py-3'>Get a Free Quote</Button>
                    </a>
                </Col>
                <hr className='footer-line mt-4'></hr>
           </Row>
            </Container>
            <Container>
            <Row>
                <Col md={5} >
                    <Row>
                        <Col md={12} className='p-0'>
                        <p className='social-media-pages'>© Drone. All Rights Reserved 2023. <a href='/' target='_blank' rel='noopener noreferrer' className='social-media-pages-link licensing'>Licensing</a></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{span:'12', offset:'0'}} xs={{span:'8', offset:'2'}} className='p-0'>
                            <span className='social-media-pages' > <a href='https://wcopilot.com/templates' target='_blank' rel='noopener noreferrer'className='social-media-pages-link'>Template</a > by <a href='https://wcopilot.com/' target='_blank' rel='noopener noreferrer'className='social-media-pages-link'>wCopilot</a> </span>
                        <span className='social-media-pages  ps-0'> Powered by <a href='https://webflow.com' target='_blank' rel='noopener noreferrer' className='social-media-pages-link'>Webflow</a> </span>
                        </Col>
                    </Row>
                </Col>
                <Col className='p-0' md={{span:'7', offset:'0'}} xs={{span:'10', offset:'1'}}> 
                <Row className='mb-5'>
                <Col md={4} xs={12} className='p-0'>
                <p className='social-media'>Check our social media-</p>
                </Col>
                <Col md={{span:'2', offset:'0'}} xs={3}> <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer' className='text-decoration-none social-media-link'>Linkdin</a></Col>
                <Col md={{span:'2', offset:'0'}}  xs={{span:'3', offset:'1'}}> <a href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'className='text-decoration-none social-media-link'>Youtube</a></Col>
                <Col md={{span:'2', offset:'0'}}  xs={{span:'3', offset:'1'}}> 
                <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' className='text-decoration-none social-media-link'>Instagram</a></Col>
                <Col md={{span:'2', offset:'0'}} xs={{span:'3', offset:'4'}}>
                    <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer' className='text-decoration-none social-media-link'>Twitter</a>
                    </Col>
                </Row>
                </Col>
            </Row>
            </Container>
            </Container>
        </>
    )
}