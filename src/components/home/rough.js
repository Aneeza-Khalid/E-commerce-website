import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './HomeAbody.css';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';
export default function rough(){
    return(
        <>
       

<section>{/*brands logo*/}
    <Container className='custom-gap'>
        <Row>
            <Stack  direction="horizontal"  gap={5}>
            <Col md={2} sm={6} className='gx-2'>
            <div className='image-zen p-3 '>
            <img src="https://assets.website-files.com/6450b31696e25f8aa6cdd7b0/645399b0e735de3aff3db736_zendesk%20logo%20.svg" alt="zendesk" border="0" />
            </div>

            </Col>
            
            <Col md={2} sm={6}>
            <div className='image-zen p-3'>
            <img src="https://assets.website-files.com/6450b31696e25f8aa6cdd7b0/645399d5fed057118130abfe_bitbucket%20logo%20.svg" alt="useberry" border="0" />
            </div>
            </Col>
            <Col md={2} sm={6} className='image-zen p-3 '>
                <div className='image-circle'>
                <img src="https://assets.website-files.com/6450b31696e25f8aa6cdd7b0/645399f845747b304ae140ce_bubble%20logo.svg" alt="circle" border="0"/>
                </div>

            </Col>
            <Col md={2} sm={6} className='image-zen p-3'>
                <div>
                <img src="https://assets.website-files.com/6450b31696e25f8aa6cdd7b0/64539a16a79e9d029b41e481_useberry%20logo%20.svg" alt="circle" border="0"/>
                </div>
            </Col>
            <Col md={3} sm={12} className='image-zen p-3 '>
            <div>
            <img src="https://assets.website-files.com/6450b31696e25f8aa6cdd7b0/64539a3a51a04642a84e62a1_circle%20logo.svg" alt="circle" border="0"/>
            </div>

            </Col>
            </Stack>
        </Row>
    </Container>
</section>
<section> {/*New Technology*/}
    <Container fluid className='custom-gap'>
        <Row>
            <Col lg={6} sm={12} className='ps-0 mt-5 mb-5'>
            <div className='technology-image'>
            <img src="https://i.ibb.co/jHQN3Jc/drone111.webp" alt="drone111" border="0"/>
            </div>
            </Col>
            <Col lg={6} sm={12} className='ps-5'>
                <div className='technology'>
                    <h3 className='mt-5'>New Technology</h3>
                    <h2 className='mt-4 mb-5 pe-5'>Explore The World From A New Perspective</h2>
                    <p>Unleash your creativity with our drone equipment and service</p>
                    <Link className='aboutUs mt-5' to="/internal-route">Great Experiance <span className='arrow'>&#8594;</span></Link>
                    <Link className='aboutUs mt-5' to="/internal-route">Remote Control <span className='arrow'>&#8594;</span></Link>
                </div>
            </Col>
        </Row>
    </Container>
    {/*Services-sub portion*/}
    <Container className='custom-gap p-3'>
        <Row>
            <Col lg={6} className='p-0'>
                <div className='service-card pt-3'>
                <div className='service-card-text ps-5 pt-4'>
                <h3>Experience a unique perspective of the world</h3>
                <p>We provide a comprehensive range of services and information related to drones, including aerial photography, videography, surveying, mapping.</p>
                <Link><Button className='py-3 px-5 mt-3 mb-4 service-btn '>Learn More</Button></Link>
                </div>
                </div>
            </Col>
            <Col lg={6} className='p-0 service-image'>
                <div className='service-image-text'>
                <h2 className='ps-5'>Fly Higher, Farther, And Faster</h2>
                </div>
            </Col>
        <Col lg={6} className='p-0 service-image-0'>
                <div className='service-image-text text-pad'>
                <h2 className='ps-5 text-pad'>Unlock New Possibilities</h2>
                </div>
            </Col>
            <Col lg={6} className='p-0'>
               <div className='service-card pt-3'>
               <div className='service-card-text ps-5 pt-4'>
                <h3>Discover the ultimate flying experience</h3>
                <p>We provide a comprehensive range of services and information related to drones, including aerial photography, videography, surveying, mapping.</p>
                <Link><Button className='py-3 mt-3 px-5 mb-4 service-btn'>Learn More</Button></Link>
                </div>
               </div>
            </Col>
        </Row>
    </Container>
</section>
<section> {/*Protfolio*/}
    <Container className='custom-gap'>
        <Row> {/* car photography*/}
            <Col md={6}>
                <div className='protfolio'>
                <h5> Protfolio</h5>
                <h3 className='mt-4 mb-5'>Our Recent Work</h3>
                </div>
                <div className='protfolio-detail'>
                    <p>May 1, 2023</p>
                    <Link  className='protfolio-link'> <h3>Arial Car Photography</h3></Link>
                    <p>This portfolio showcases cars from a unique aerial perspective, captured by drones. It includes shots of cars on the road and in scenic locations</p>
                </div>
                <Link className='aboutUs mt-5' to="/internal-route">Great Experiance<span className='arrow'>&#8594;</span></Link>
            </Col>
            <Col md={6}>
            <Link className='protfolio-btn-link'>
              <div className='d-flex justify-content-between'>
                <div></div> {/* This is an empty div to create space on the left */}
                <Button className='py-2 px-4 mt-4 protfolio-btn'>View More</Button>
                </div>
            </Link>
            <div className='car-image mt-5'> <img src="https://i.ibb.co/hHn7gnX/6454c3f7a687a33d64af28f7-car-image-p-800.jpg" alt="carimage" border="0"/>
            </div>

            </Col>
        </Row>
        <Row className='custom-gap'> {/* Drone filmography*/}
            <Col md={6}>
            <div className='protfolio-detail'>
                    <p>May 1, 2023</p>
                    <Link className='protfolio-link'> <h3>Drone Filmography</h3></Link>
                    <p>This portfolio showcases cars from a unique aerial perspective, captured by drones. It includes shots of cars on the road and in scenic locations</p>
                </div>
                <div>
                <Link className='aboutUs mt-5' to="/internal-route">Great Experiance <span className='arrow'>&#8594;</span></Link>
                </div>
            </Col>
            <Col md={6}>
            <div className='drone-film'> 
            <img src="https://i.ibb.co/94CXnjB/plants.jpg" alt="plants" border="0"/>
            </div>
            </Col>
        </Row>
        <Row className='custom-gap'> {/* Wedding Momments*/}
            <Col md={6}>
            <div className='protfolio-detail'>
                 <p>May 1, 2023</p>
                 <Link className='protfolio-link'> <h3>Wedding Momments</h3></Link>
                 <p>This portfolio presents a collection of memorable moments fromweddings captured by drones.These shots offer a bird's eye viewof the special moments.</p>
                </div>
                <div>
                <Link className='aboutUs mt-5' to="/internal-route">Great Experiance <span className='arrow'>&#8594;</span></Link>
                </div>
            </Col>
            <Col md={6}>
            <div className='protfolios-image'>
                <img src="https://i.ibb.co/ZfVTkP4/arial-viw.jpg" alt="arial-viw" border="0" />
            </div>
            </Col>
        </Row>
    </Container>
</section> 
<Container fluid className='footer-background' >
            <Container>
            <Row className= 'text-center'> 
                <div className='p-5'>
                    <img className='mt-5 mb-3' src='https://assets.website-files.com/6450b31696e25f8aa6cdd7b0/64522ec803e23e80fd7d970b_white%20logo.svg' alt='drone'/>
                </div>
                <div className='footer-text'>
                <h1 className='text-align-center'>Let’s cooperate together</h1>
                <p className='mt-5'>Experience heightened speed, improved stability, and a complete suite of features.</p>
                </div>
                <div className='mt-5'>
                    <Link>
                    <Button className='footer-btn px-5 py-3'>Get a Free Quote</Button>
                    </Link>
                </div>
                <hr className='footer-line'></hr>
           </Row>
            </Container>
            <Row>
                <Col xs={12} md={5} >
                    <Row>
                        <Col md={10}>
                        <p className='social-media-pages'>© Drone. All Rights Reserved 2023.  <Link className='social-media-pages-link'>Licensing</Link></p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={10}  className='pe-0 pe-2 me-0'>
                            <span className='social-media-pages' > <Link className='social-media-pages-link'>Template</Link > by <Link className='social-media-pages-link'>wCopilot</Link> </span>
                        <span className='social-media-pages  ps-0'> Powered by <Link className='social-media-pages-link'>Webflow</Link> </span>
                        </Col>
                    </Row>
                </Col>
                <Col xs={12} md={7}> 
                <Row>
                <Col md={4} sm={3}><p className='social-media'>Check our social media-</p> </Col>
                <Col md={2} sm={3}> <Link className='social-media-link'>Linkdin</Link></Col>
                <Col md={2} sm={3}> <Link className='social-media-link'>Youtube</Link></Col>
                <Col md={2} sm={3}> <Link className='social-media-link'>Instagram</Link></Col>
                <Col md={2}><Link className='social-media-link'>Twitter</Link></Col>
                </Row>
                </Col>
            </Row>
            </Container>
</>
    )
}