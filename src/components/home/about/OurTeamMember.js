import './OurTeamMember.css';
import  {Col, Row, Container } from 'react-bootstrap';
import { BsInstagram, BsTwitter } from "react-icons/bs";

export default function OurTeamMember(){
    return(
        <>
        <Container className='about-gap'> 
            <Row className='our-team'>
                <h5>Unleashing your aerial potential</h5>
                <h1 className='mt-4 text-capitalize'>Our Dedicated Team</h1>
            </Row>
            <Row>
                <Col lg={4} md={6} xs={12}>
                    <div className='team-card p-3 mt-5'>
                        <div className='image-card'>
                        <img src="https://i.ibb.co/7kFyZ52/person-3.webp" alt="person-3" border="0" />
                        </div>
                        <Row>
                            <Col xs={8} className='team-name'>
                                <h2 className='mt-4 text-capitalize'>Jacob Jones</h2>
                                <p>Pilot</p>
                            </Col>
                            <Col xs={4}>
                                <div className='d-flex mt-3 ms-4'>
                                <a href='https://www.instagram.com/' className='me-3 insta-twit'> <BsInstagram/>
                                </a>
                                <a href='https://twitter.com/' className='insta-twit'> <BsTwitter/>
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
                                <h2 className='mt-4 text-capitalize'>Robert Fox</h2>
                                <p>Photographer</p>
                            </Col>
                            <Col xs={4}>
                                <div className='d-flex mt-3 ms-4'>
                                <a href='https://www.instagram.com/' className='me-3 insta-twit'> <BsInstagram/>
                                </a>
                                <a href='https://twitter.com/' className='insta-twit'> <BsTwitter/>
                                </a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={4} md={6} xs={12}>
                    <div className='team-card p-3 mt-5'>
                        <div className='image-card'>
                        <img src="https://i.ibb.co/Ybn8Mfz/1-person.webp" alt="1-person" border="0" />
                        </div>
                        <Row>
                            <Col xs={8} className='team-name'>
                                <h2 className='mt-4 text-capitalize'>Jack simons</h2>
                                <p>Pilot</p>
                            </Col>
                            <Col xs={4}>
                                <div className='d-flex mt-3 ms-4'>
                                <a href='https://www.instagram.com/' className='me-3 insta-twit'> <BsInstagram/>
                                </a>
                                <a href='https://twitter.com/' className='insta-twit'> <BsTwitter/>
                                </a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={4} md={6} xs={12}>
                    <div className='team-card p-3 mt-5'>
                        <div className='image-card'>
                        <img src="https://i.ibb.co/98VRvg3/person-6.webp" alt="person-6" border="0" />
                        </div>
                        <Row>
                            <Col xs={8} className='team-name'>
                                <h2 className='mt-4 text-capitalize'>Esther Howard</h2>
                                <p className='text-capitalize'>Technical support</p>
                            </Col>
                            <Col xs={4}>
                                <div className='d-flex mt-3 ms-4'>
                                <a href='https://www.instagram.com/' className='me-3 insta-twit'> <BsInstagram/>
                                </a>
                                <a href='https://twitter.com/' className='insta-twit'> <BsTwitter/>
                                </a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={4} md={6} xs={12}>
                    <div className='team-card p-3 mt-5'>
                        <div className='image-card'>
                        <img src="https://i.ibb.co/1fv7GLX/person-5.webp" alt="person-5" border="0" />
                        </div>
                        <Row>
                            <Col xs={8} className='team-name'>
                                <h2 className='mt-4 text capitalize'>Tyler Hosimon</h2>
                                <p>Pilot</p>
                            </Col>
                            <Col xs={4}>
                                <div className='d-flex mt-3 ms-4'>
                                <a href='https://www.instagram.com/' className='me-3 insta-twit'> <BsInstagram/>
                                </a>
                                <a href='https://twitter.com/' className='insta-twit'> <BsTwitter/>
                                </a>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col lg={4} md={6} xs={12}>
                    <div className='team-card p-3 mt-5'>
                        <div className='image-card'>
                        <img src="https://i.ibb.co/SsJsFPv/person-4.webp" alt="person-4" border="0" />
                        </div>
                        <Row>
                            <Col xs={8} className='team-name'>
                                <h2 className='mt-4'>Theresa Webb</h2>
                                <p>Designer</p>
                            </Col>
                            <Col xs={4}>
                                <div className='d-flex mt-3 ms-4'>
                                <a href='https://www.instagram.com/' className='me-3 insta-twit'> <BsInstagram/>
                                </a>
                                <a href='https://twitter.com/' className='insta-twit'> <BsTwitter/>
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