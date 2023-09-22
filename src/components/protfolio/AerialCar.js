import ArialCarHeader from './ArialCarHeader';
import './AerialCar.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './TravelFootage.css';
import { BsFillCameraFill, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import Footer from '../home/Footer';



export default function ArialCar(){
    return(
        <>
        < ArialCarHeader />
        <Container className='mb-5'>
            <Row className='travel-gap'>
                <Col md={8} xs={12}>
                    <div className='travel-footage'>
                    <h1 className='text-capitalize'>
                        Arial car photography
                    </h1>
                    <p className='mt-5'>
                    This portfolio showcases cars from a unique aerial perspective, captured by drones. It includes shots of cars on the road and in scenic locations.
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
                In recent years, the field of photography has been revolutionized by the emergence of drone technology. Drones equipped with high-resolution cameras have opened up new possibilities for capturing stunning aerial images and videos. One area where drones have particularly made a significant impact is in car photography.
                </p>
                <div className='travel-footage-detail-heading' >
                    <h1>
                    With our drones, the possibilities are endless, and the shots are truly cinematic.
                    </h1>
                </div>
                <p>Car enthusiasts and professionals alike have discovered the immense potential of using drones for capturing breathtaking shots of automobiles from unique perspectives. With their ability to fly and hover at varying altitudes, drones offer a level of flexibility and creativity that was previously unimaginable. Aerial car photography has become an exciting niche within the larger realm of automotive photography, allowing for captivating visuals that showcase vehicles in a whole new light.</p>
                <p>
                One of the primary advantages of using drones for car photography is the ability to capture dynamic shots that highlight a car's design, lines, and contours. Drones can fly at different angles and heights, enabling photographers to experiment with compositions that emphasize the vehicle's aesthetic qualities. Whether it's capturing a sleek sports car speeding along a coastal road or a vintage automobile driving through a scenic countryside, aerial shots can convey a sense of grandeur and adventure that traditional ground-based photography often cannot achieve.
                </p>
                </div>
                </Col>
            </Row>
        </Container>
        {/*images section*/}
        <Container fluid className='mt-5'>
            <Row>
                <Col md={6} xs={12} className='p-0'>
                    <a href='123'><div className='travel-footage-detail-image-1' >
                    <img src="https://i.ibb.co/94CXnjB/plants.jpg" alt="plants" border="0" />
                    </div> </a>
                </Col>
                <Col md={6} xs={12} className='p-0'>
                    <a href='123'><div className='travel-footage-detail-image-1'>
                    <img src="https://i.ibb.co/RHQy5vj/car-image.webp" alt="car" border="0" />
                    </div> </a>
                </Col>
                <Col md={6} xs={12} className='p-0 mt-0'>
                    <a href='123'><div className='travel-footage-detail-image-1 mt-0' >
                    <img src="https://i.ibb.co/HXkWLHm/jeep-image.webp" alt="jeep" border="0"/>
                    </div></a>
                </Col>
                <Col md={6} xs={12} className='p-0'>
                    <a href='123'><div className='travel-footage-detail-image-1'>
                    <img src="https://i.ibb.co/McQyJ6m/car-pics.jpg" alt="car-pics" border="0" />
                    </div> </a>
                </Col>
            </Row>
            </Container>
            
        <Container>
            <Row>
                <Col md={5} className='p-5'>
                    <div className='travel-footage-link d-flex justify-content-center alighn-item-center'>
                        <a href='/DroneFilm' className='text-capitalize previous-link text-decoration-none '> <span className='travel-footage-arrow me-4 pe-4 pt-2'>&#8592;</span> Prev protfolio </a>
                    </div>
                </Col>
                <Col md={2} xs={12} className=' d-flex align-items-center justify-content-center text-center camera-icon '>
               <BsFillCameraFill className='camera'/>
                </Col>
                <Col md={5} className='p-5 '>
                    <div className='travel-footage-link'>
                        <a href='/TravelFootage' className='text-capitalize previous-link text-decoration-none'> next protfolio <span className='travel-footage-arrow ms-4 ps-4'>&#8594;</span></a>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    )

}