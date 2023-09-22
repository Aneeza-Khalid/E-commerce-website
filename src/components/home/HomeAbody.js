import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './HomeAbody.css';
import Logos from './LogosA';
import Protfolio from './Protfolio';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {useEffect} from 'react';

export default function HomeAbody() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds for this section
        });
      }, []);

  return (
// home page first portion
   <>
    <section>{/*cards and image portion*/}
    <Container className='custom-gap-1' 
     >
        <Row>
            <Col lg={6} md={12} sm={12} data-aos="fade-up">
                <Row>
                    <Col lg={6} sm={12} md={6} xl={6}>
                        <div className='blue-card  ps-3 pe-3 pt-4 pb-2'>
                            <h5>
                                01
                            </h5>
                            <div className='card-line-1'></div>
                            <h3 className='pt-3'>
                            Maneuverability
                            </h3>
                            <p className='pt-2 '>
                            Drones are highly maneuverable and can fly in tight spaces.
                            </p>

                        </div>
                    </Col>
                    <Col sm={12} lg={6} md={6} xl={6} className='small-screen-gap' data-aos="fade-up" >
                     <div className='white-card  ps-3 pe-3 pt-4 pb-2'>
                         <h5>
                                02
                         </h5>
                         <div className='card-line'></div>
                            <h3 className='pt-3'>
                            Stability
                            </h3>
                            <p className='pt-2'>
                            Drones are designed to be stable in flight, even in windy conditions.
                            </p>
                     </div>
                    </Col>
                </Row>
                <Row className='mt-4'>
                <Col md={6} sm={12} lg={6} xl={6} data-aos="fade-up">
                     <div className='white-card ps-3 pe-3 pt-4 pb-2'>
                          <h5>
                                03
                         </h5>
                         <div className='card-line'></div>
                            <h3 className='pt-3'>
                            Lightweight
                            </h3>
                            <p className='pt-2'>
                            Drones can be flown for longer periods of time on a single battery charge.
                            </p>
                    </div>
                    </Col>
                    <Col md={6} xl={6} sm={12} lg={6} className='small-screen-gap' data-aos="fade-up">
                        <div className='white-card  ps-3 pe-3 pt-4 pb-2'>
                        <h5>
                                04
                         </h5>
                         <div className='card-line'></div>
                            <h3 className='pt-3'>
                            Remote Control
                            </h3>
                            <p  className='pt-2'>
                            This makes them ideal for capturing footage in difficult areas.
                            </p>

                        </div>
                    </Col>

                </Row>
            </Col>
            <Col xl={6} lg={6} md={12} sm={12} className='small-screen-image-gap' data-aos="fade-up">
                <div className='image'>
                <img src="https://i.ibb.co/HHr4Gt4/drone-image.webp" alt="drone"
                border="0"/>
                </div>
            </Col>
        </Row>
    </Container>
    </section>
    <section> {/*Services portion*/}
<Container fluid className='custom-gap'>
    <Row>
        <Col lg= {{ order: 'first', span:'6' }} xs={{ order: 'last', span:'12' }} className='p-0'>
            <div className='download-drone'>
            <img src="https://i.ibb.co/D4d7pC4/download.jpg" alt="download" />
            </div>
        </Col>
        <Col lg= {{ order: 'last', span:'6' }} xs={{ order: 'first', span:'12' }} className='services-portion m-0'>
            <Row>
            <Col sm={11} className='py-5 ps-4 pe-5 me-3 services-portion-main' data-aos="fade-up">
                    <h1 className='pe-5 '>
                    Services For Producing Aerial Photography And Videos
                    </h1>
                </Col>
                <Row>
                    <Col md={4} sm={12} className='py-4 px-4 services-portion-number' data-aos="fade-up">
                        <h2>4K</h2>
                        <h5> Photo Resolution</h5>
                    </Col>
                    <Col md={4} sm={12} className='py-4 px-4 services-portion-number' data-aos="fade-up">
                    <h2>1000+</h2>
                    <h5>Projects Done</h5>
                    </Col>
                    <Col md={4} sm={12} className='py-4 px-4 services-portion-number' data-aos="fade-up">
                    <h2>6+</h2>
                    <h5>Years Experiance</h5>
                    </Col>
                </Row>
            </Row>
            <Col sm={12} className='ps-2 py-4 services-portion-button' data-aos="fade-up">
            <Button className='px-4 py-2 white-btn mt-3' data-aos="fade-up">Learn More</Button>
            </Col>
            <Row>
                <Col>

                </Col>
            </Row>
        </Col>
    </Row>
</Container>
</section>

<section> {/*Tech and Innovation*/}
<Container fluid className='custom-gap border-line'>
<Container >
        <Row>
            <Col lg={6} className='pt-5 tech-innovation' data-aos="fade-up">
                <h2> Teach And Innovation</h2>
                <p className='pe-4'>Fly high and capture the moment with our drone photography and videography services</p>
                <p className='pe-5'>We offers a comprehensive collection of aerial footage and other content captured by drones, as well as information on the latest drone technology and how it can be used in different industries</p>
                <Button href='/AboutUs' className='px-4 py-2 mt-5 mb-3 blue-btn' data-aos="fade-up">About Us</Button>
            </Col>
            <Col lg={6} className='small-screen-image-gap pe-0'>
                <div className='tech-innovation-image ms-1'>
                <img className='ps-5 pe-0' src="https://i.ibb.co/D8CCRVx/drone3.webp" alt="drone" border="0"/>
                </div>
            </Col>
        </Row>
        </Container>
        </Container>
</section>
<section>
<Logos></Logos>
</section>

<section> {/*New Technology*/}
<div className='vertical-line'></div>
    <Container fluid className='pt-5 pb-5 border-line-1 mt-4'>
    
        <Row>
            <Col lg={6} sm={12} className='p-0 mt-5 mb-5 '>
            <div className='technology-image'>
            <img src="https://i.ibb.co/jHQN3Jc/drone111.webp" alt="drone111" border="0"/>
            </div>
            </Col>
            <Col lg={6} sm={12} className='ps-5 Technology'>
                <div className='technology' data-aos="fade-up">
                    <h3 className='mt-5'>New Technology</h3>
                    <h2 className='mt-4 mb-5 pe-5'>Explore The World From A New Perspective</h2>
                    <p>Unleash your creativity with our drone equipment and service</p>
                    <div data-aos="fade-up">
                    <a href='/ContactUs' className='aboutUs mt-5 pe-0' to="/internal-route">Great Experiance <span className='arrow-tech pe-5'>&#8594;</span></a><br/>
                    <a href='/Gallery' className='aboutUs mt-5' to="/internal-route">Remote Control <span className='arrow-tech pe-5'>&#8594;</span></a>
                    </div>
                </div>
            </Col>
        </Row>
    
    {/*Services-sub portion*/}
    <Container className=' p-3 pb-5 '>
        <Row>
            <Col xs={12} md= {6} className='p-0 order-xs-1'>
                <div className='service-card pt-3'>
                <a href='/Pricing'><img className='service-card-image-link' src='https://assets.website-files.com/6450b31696e25f8aa6cdd7b0/6454b5c62c310529a5d35c90_right%20arrow.svg' alt='link-to'/></a>
                <div className='service-card-text ps-4 pt-4' data-aos="fade-up">
                <h3>Experience a unique perspective of the world</h3>
                <p>We provide a comprehensive range of services and information related to drones, including aerial photography, videography, surveying, mapping.</p>
                <a href='/Shop' data-aos="fade-up"><Button className='py-3 px-5 mt-3 mb-4 service-btn '>Learn More</Button></a>
                </div>
                </div>
            </Col>
            <Col  md={6} xs= {12} className='p-0 service-image order-xs-2'>
                <div className='service-image-text pe-3' data-aos="fade-up">
                <h2 className='ps-4'>Fly Higher, Farther, And Faster</h2>
                </div>
            </Col>
        </Row>
        <Row>
        <Col md= {{span:'6', offset:'0', order:'first'}} xs= {{span:'12', offset:'0', order:'last'}}  className='p-0 service-image-0 order-xs-4'>
                <div className='service-image-text text-pad' data-aos="fade-up">
                <h2 className='ps-4 text-pad'>Unlock New Possibilities</h2>
                </div>
            </Col>
            <Col md= {{span:'6', offset:'0', order:'last'}} xs= {{span:'12', offset:'0', order:'first'}} className='p-0 order-sm-3'>
               <div className='service-card pt-3'>
               <a href='/Pricing'><img className='service-card-image-link' src='https://assets.website-files.com/6450b31696e25f8aa6cdd7b0/6454b5c62c310529a5d35c90_right%20arrow.svg' alt='link-to'/></a>
               <div className='service-card-text ps-4 pt-4' data-aos="fade-up">
                <h3>Discover the ultimate flying experience</h3>
                <p>We provide a comprehensive range of services and information related to drones, including aerial photography, videography, surveying, mapping.</p>
                <a href='/Shop'><Button className='py-3 mt-3 px-5 mb-4 service-btn'>Learn More</Button></a>
                </div>
               </div>
            </Col>
        </Row>
    </Container>
    </Container>
</section>


<Protfolio></Protfolio>

   </>
  )
}
