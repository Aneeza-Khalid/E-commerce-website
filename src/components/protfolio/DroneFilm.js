import DroneFilmHeader from './DroneFilmHeader';
import './DroneFilm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './TravelFootage.css';
import { BsFillCameraFill, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import Footer from '../home/Footer';

export default function DroneFilm(){
    return(
        <>
        <DroneFilmHeader />
        <Container className='mb-5'>
            <Row className='travel-gap'>
                <Col md={8} xs={12}>
                    <div className='travel-footage'>
                    <h1 className='text-capitalize'>
                        drone filmography
                    </h1>
                    <p className='mt-5'>
                    Drone Filmography highlights the potential of drones to capture stunning footage that allows filmmakers to tell stories in new and innovative ways.
                    </p>
                    <a href='/ContactUs'><Button className=' mt-3 text-capitalize protfolio-btn py-2 px-4 mt-4 mb-4'> get in touch</Button></a>
                    </div>
                </Col>
                <Col md={4} xs={12} className='ps-md-5 ps-xs-0'>
                    <div className='travel-footage-services'>
                        <p>
                            Date
                        </p>
                        <h6 className='mt-0'> May 18, 2023</h6>
                        <p className='mt-3'>
                            Services
                        </p>
                        <h6 className='text-capitalize'> travel & torisim</h6>
                        <p className='mt-3'>
                            Share on
                        </p>
                        <div>
                        <a className='text-decoration-none i-cons' href='https://www.instagram.com/'><BsInstagram/> </a>
                            <a className='text-decoration-none ms-2 i-cons' href='https://www.facebook.com/'><BsFacebook/> </a>
                            <a className='text-decoration-none ms-2 i-cons' href='https://twitter.com/'><BsTwitter/> </a>

                        </div>
                        
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                <div className='travel-footage-detail'>
                <p>
                Are you ready to witness the world like never before? Our team of skilled drone pilots and cinematographers are here to take you on an extraordinary visual journey. Using the latest advancements in drone technology, we capture stunning aerial footage that will leave you in awe. From soaring above majestic cityscapes to gliding over picturesque landscapes, our drones provide a unique perspective that transports you into a whole new realm of cinematography.
                </p>
                <div className='travel-footage-detail-heading' >
                    <h1>
                    With our drones, the possibilities are endless, and the shots are truly cinematic.
                    </h1>
                </div>
                <p>Whether you're looking to capture captivating footage for a film, documentary, real estate, or simply want to showcase the beauty of your special event, our team is equipped with the technical expertise and artistic vision to deliver stunning results. We take pride in our attention to detail, ensuring every frame is a work of art.</p>
                <p>
                So, whether you're an aspiring filmmaker, a marketing professional, or an adventurous soul craving a unique visual experience, Drone Filmography is here to bring your vision to life. Let us elevate your storytelling and capture the world from a whole new perspective. Contact us today and let's embark on an aerial journey together!
                </p>
                </div>
                </Col>
            </Row>
        </Container>
        {/*images section*/}
        <Container fluid className='mt-5'>
            <Row>
                <Col md={6} xs={12} className='p-0'>
                    <a href='123'><div className='travel-footage-detail-image' >
                    <img src="https://i.ibb.co/25G2mxg/remote-drone.jpg" alt="remote-drone" border="0" />
                    </div> </a>
                </Col>
                <Col md={6} xs={12} className='p-0'>
                    <a href='123'><div className='travel-footage-detail-image-1'>
                    <img src="https://i.ibb.co/Qf1MFSK/foresr-footage.webp" alt="foresr-footage" border="0" />
                    </div> </a>
                </Col>
                <Col md={6} xs={12} className='p-0 mt-0'>
                    <a href='123'><div className='travel-footage-detail-image-1 mt-0' >
                    <img className='mt-0' src="https://i.ibb.co/q0DYvvg/646c64bc4928596660eeb752-drone-navigation.jpg" alt="drone-navigation" border="0" />
                    </div></a>
                </Col>
                <Col md={6} xs={12} className='p-0'>
                    <a href='123'><div className='travel-footage-detail-image-1'>
                    <img src="https://i.ibb.co/D4d7pC4/download.jpg" alt="download" border="0" />
                    </div> </a>
                </Col>
            </Row>
            </Container>
            
        <Container>
            <Row>
                <Col md={5} className='p-5'>
                    <div className='travel-footage-link d-flex justify-content-center alighn-item-center'>
                        <a href='/WeddingMomments' className='text-capitalize previous-link text-decoration-none '> <span className='travel-footage-arrow me-4 pe-4 pt-2'>&#8592;</span> Prev protfolio </a>
                    </div>
                </Col>
                <Col md={2} xs={12} className=' d-flex align-items-center justify-content-center text-center camera-icon '>
               <BsFillCameraFill className='camera'/>
                </Col>
                <Col md={5} className='p-5 '>
                    <div className='travel-footage-link'>
                        <a href='/ArialCar' className='text-capitalize previous-link text-decoration-none'> next protfolio <span className='travel-footage-arrow ms-4 ps-4'>&#8594;</span></a>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>

    )
}