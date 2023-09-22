import TravelFootageHeader from './TravelFootageHeader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './TravelFootage.css';
import { BsFillCameraFill, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import Footer from '../home/Footer';

export default function TravelFootage(){
    return(
        <>
        <TravelFootageHeader/>

        <Container>
            <Row className='travel-gap'>
                <Col md={8} xs={12}>
                    <div className='travel-footage'>
                    <h1 className='text-capitalize'>
                        travel footage
                    </h1>
                    <p className='mt-5'>
                    Immerse yourself in the awe-inspiring beauty of nature as our drone footage captures majestic landscapes from around the world.
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
                In recent years, the advent of drone technology has revolutionized the way we capture and experience travel footage. These unmanned aerial vehicles (UAVs) equipped with high-resolution cameras have opened up a whole new realm of possibilities, allowing us to see the world from breathtaking vantage points. From soaring above towering mountains to gliding over pristine beaches, drone travel footage has become a popular medium for adventurers and filmmakers alike, providing viewers with a unique and awe-inspiring perspective. Let's delve into the mesmerizing world of drone travel footage and explore the wonders it unveils.
                </p>
                <p> With drones, filmmakers and travel enthusiasts can capture stunning aerial shots of landscapes that were previously inaccessible or hard to reach. Remote and isolated locations, hidden valleys, and cascading waterfalls take on an entirely new dimension when viewed from above. The drone's nimble flight capabilities allow it to traverse rugged terrains, revealing hidden gems that were once beyond our visual grasp.</p>

                <div className='travel-footage-detail-heading' >
                    <h1>
                    With our drones, the possibilities are endless, and the shots are truly cinematic.
                    </h1>
                </div>
                <p>Drones offer an extraordinary way to showcase the architectural marvels and vibrant cityscapes that dot our planet. From bustling metropolises with glittering skyscrapers to historic towns adorned with charming cobblestone streets, drone footage allows us to appreciate the grandeur and intricacy of human-made structures. The fluid movements of the drone through narrow alleyways and soaring above iconic landmarks create a sense of immersion and an unmatched cinematic experience.</p>
                <p>
                Drone travel footage has transformed the way we experience the world. Through the lens of a drone, we can witness the world from a bird's-eye view, capturing the beauty of landscapes, the magic of cities, and the wonders of wildlife in ways we could only dream of before. As technology continues to advance, we can expect even more stunning and immersive footage that will transport us to distant lands and inspire our own wanderlust. So, fasten your seatbelts and get ready to embark on an extraordinary visual journey through the captivating realm of drone travel footage.
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
                    <img src="https://i.ibb.co/NL3Pgtf/mountains.webp" alt="mountains" border="0" />
                    </div> </a>
                </Col>
                <Col md={6} xs={12} className='p-0'>
                    <a href='123'><div className='travel-footage-detail-image-1'>
                    <img src="https://i.ibb.co/nPPSXFF/upper-view.webp" alt="upper-view" border="0" />
                    </div> </a>
                </Col>
                <Col md={6} xs={12} className='p-0'>
                    <a href='123'><div className='travel-footage-detail-image-1' >
                    <img src="https://i.ibb.co/94CXnjB/plants.jpg" alt="plants" border="0" />
                    </div></a>
                </Col>
                <Col md={6} xs={12} className='p-0'>
                    <a href='123'><div className='travel-footage-detail-image'>
                    <img src="https://i.ibb.co/x2fTh5H/6466429c42c7d36d889bc9ec-travel-image-medium-p-800.jpg" alt="mountain-view" border="0" />
                    </div> </a>
                </Col>
            </Row>
            </Container>

        <Container>
            <Row>
                <Col md={5} className='p-5'>
                    <div className='travel-footage-link d-flex justify-content-center alighn-item-center'>
                        <a href='/ArialCar' className='text-capitalize previous-link text-decoration-none t-f-a'> <span className='travel-footage-arrow me-4 pe-4'>&#8592;</span> Prev protfolio </a>
                    </div>
                </Col>
                <Col md={2} xs={12} className=' d-flex align-items-center justify-content-center text-center camera-icon '>
               <BsFillCameraFill className='camera'/>
                </Col>
                <Col md={5} className='p-5 '>
                    <div className='travel-footage-link'>
                        <a href='/WeddingMomments' className='text-capitalize previous-link text-decoration-none'> next protfolio <span className='travel-footage-arrow ms-4 ps-4'>&#8594;</span></a>
                    </div>
                </Col>
            </Row>
            
        </Container>
        <Footer />
        </>
    )
}