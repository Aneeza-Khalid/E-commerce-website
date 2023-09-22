import WeddingMommentsHeader from './WeddingMommentsHeader';
import './WeddingMomments.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './TravelFootage.css';
import { BsFillCameraFill, BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import Footer from '../home/Footer';


export default function WeddingMomments(){
    return(
        <>
        < WeddingMommentsHeader/>

        <Container className='mb-5'>
            <Row className='travel-gap'>
                <Col md={8} xs={12}>
                    <div className='travel-footage'>
                    <h1 className='text-capitalize'>
                        wedding momments
                    </h1>
                    <p className='mt-5'>
                    This portfolio presents a collection of memorable moments from weddings captured by drones.These shots offer a bird's eye view of the special moments.
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
                Weddings are special occasions filled with joy, love, and memorable moments. Couples are always looking for unique ways to capture these precious memories, and one innovative method that has gained popularity in recent years is using drones to document the wedding day. Drones offer a fresh perspective and the ability to capture stunning aerial shots, making them an exciting addition to the traditional wedding photography and videography.
                </p>
                <div className='travel-footage-detail-heading' >
                    <h1>
                    With our drones, the possibilities are endless, and the shots are truly cinematic.
                    </h1>
                </div>
                <p>One of the most striking aspects of using drones for wedding photography is the ability to capture expansive group photos. Instead of struggling to fit everyone into a single frame, the drone can capture the entire wedding party, including family and friends, in one epic shot. These group photos not only showcase the scale of the celebration but also create a lasting memento that will be cherished for years to come</p>
                <p>
                Incorporating drones into wedding photography and videography adds a touch of modernity and creativity to the traditional wedding album. The breathtaking aerial views, comprehensive group photos, and unique perspectives captured by drones create a visually stunning and unforgettable record of the special day. As technology continues to advance, drones are likely to become an increasingly popular choice for couples looking to capture their wedding moments in a truly extraordinary way.
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
                    <img src="https://i.ibb.co/SXF09Yk/646636b683a7c8a8a8b3336b-wedding-image-p-800.jpg" alt="wedding" border="0" />
                    </div> </a>
                </Col>
                <Col md={6} xs={12} className='p-0'>
                    <a href='123'><div className='travel-footage-detail-image-1'>
                    <img src="https://i.ibb.co/fHykWdQ/646636ba86bf6572ce741b0a-wedding-rings-p-800.jpg" alt="wedding-rings" border="0" />
                    </div> </a>
                </Col>
                <Col md={6} xs={12} className='p-0'>
                    <a href='123'><div className='travel-footage-detail-image-1' >
                    <img src="https://i.ibb.co/vHq4Bfm/646637147f329cdcad66a612-wedding-image-medium-p-800.jpg" alt="wedding-shoot" border="0" />
                    </div></a>
                </Col>
                <Col md={6} xs={12} className='p-0'>
                    <a href='123'><div className='travel-footage-detail-image'>
                    <img src="https://i.ibb.co/sHwdGXq/646636bf6a42196e4462666b-wedding-p-800.jpg" alt="wedding-shoot" border="0"></img>
                    </div> </a>
                </Col>
            </Row>
            </Container>

        <Container>
            <Row>
                <Col md={5} className='p-5'>
                    <div className='travel-footage-link d-flex justify-content-center alighn-item-center'>
                        <a href='/TravelFootage' className='text-capitalize previous-link text-decoration-none '> <span className='travel-footage-arrow me-4 pe-4 pt-2'>&#8592;</span> Prev protfolio </a>
                    </div>
                </Col>
                <Col md={2} xs={12} className=' d-flex align-items-center justify-content-center text-center camera-icon '>
               <BsFillCameraFill className='camera'/>
                </Col>
                <Col md={5} className='p-5 '>
                    <div className='travel-footage-link'>
                        <a href='/DroneFilm' className='text-capitalize previous-link text-decoration-none'> next protfolio <span className='travel-footage-arrow ms-4 ps-4'>&#8594;</span></a>
                    </div>
                </Col>
            </Row>
        </Container>
        <Footer />
        </>
    )
}