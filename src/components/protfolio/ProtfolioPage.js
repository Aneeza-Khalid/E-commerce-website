import './ProtfolioPage.css';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from '../home/Footer';
import ProtfolioPageHeader from './ProtfolioPageHeader'
//import Button from 'react-bootstrap/Button';

export default function ProtfolioPage(){
    return(
        <>
        <ProtfolioPageHeader/>
        <Container className=' protfolio-below-gap'>
            <Row> {/* car photography*/}
            <Col md={6}>
            <a href='abs' className='protfolio-btn-link'>
            </a>
            <a href='/ArialCar'><div className='car-photography mt-5'> <img src="https://i.ibb.co/hHn7gnX/6454c3f7a687a33d64af28f7-car-image-p-800.jpg" alt="carimage" border="0"/>
            </div></a>
            </Col>
            <Col md={6} className='pt-lg-5 ps-3'>
                <div className='protfolio-detail pt-5'>
                    <p>May 1, 2023</p>
                    <a href='/ArialCar' className='protfolio-link'> <h3>Arial Car Photography</h3></a>
                    <p>This portfolio showcases cars from a unique aerial perspective, captured by drones. It includes shots of cars on the road and in scenic locations</p>
                </div>
                <div className='protfolio-pages-more'>
                <a href='/ArialCar' className='protfolio-pages mt-5 mb-4' to="/internal-route">View More<span className='protfolio-arrow ms-5'>&#8594;</span></a>
                </div>
            </Col>
            </Row>
            <hr className='mt-5 mb-5'></hr>
            <Row className=''> {/* Drone filmography*/}
            <Col md={{span:'6', offset:'0', order:'first'}} xs={{span:'12', offset:'0', order:'last'}}>
            <div className='protfolio-detail pt-5'>
                    <p>May 1, 2023</p>
                    <a href='/DroneFilm' className='protfolio-link'> <h3>Drone Filmography</h3></a>
                    <p>This portfolio showcases cars from a unique aerial perspective, captured by drones. It includes shots of cars on the road and in scenic locations</p>
                </div>
                <div className='protfolio-pages-more'>
                <a href='/DroneFilm' className='protfolio-pages mt-5 mb-4' to="/internal-route">View More<span className='protfolio-arrow ms-5'>&#8594;</span></a>
                </div>
            </Col>
            <Col md={{span:'6', offset:'0', order:'last'}} xs={{span:'12', offset:'0', order:'first'}}>
                <a href='/DroneFilm'>
            <div className='drone-filmography'> 
            <img src="https://i.ibb.co/94CXnjB/plants.jpg" alt="plants" border="0"/>
            </div></a>
            </Col>
        </Row> {/**wedding-momments */}
        <hr className='mt-5 mb-5'></hr>
        <Row>
        <Col md={6}>
            <a href='/WeddingMomments'><div className='wedding-image mt-5 mb-lg-4'>
                <img src="https://i.ibb.co/ZfVTkP4/arial-viw.jpg" alt="arial-viw" border="0" /> 
            </div>
            </a>
            </Col>
            <Col md={6} className='pt-lg-5'> 
            <div className='protfolio-detail pt-5 ps-3'>
                 <p>May 1, 2023</p>
                 <a href='/WeddingMomments' className='protfolio-link'> <h3>Wedding Momments</h3></a>
                 <p>This portfolio presents a collection of memorable moments fromweddings captured by drones.These shots offer a bird's eye viewof the special moments.</p>
                </div>
                <div className='protfolio-pages-more ps-3'>
                <a href='/WeddingMomments' className='protfolio-pages mt-5 mb-4' to="/internal-route">View More<span className='protfolio-arrow ms-5'>&#8594;</span></a>
                </div>
            </Col>
        </Row>
        <hr className='mt-5 mb-5'></hr>

        <Row> {/* camera man*/}
            <Col md={{span:'6', offset:'0', order:'first'}} xs={{span:'12', offset:'0', order:'last'}} className='pt-5 ps-3'>
                <div className='protfolio-detail pt-5'>
                    <p>May 1, 2023</p>
                    <a href='/TravelFootage' className='protfolio-link text-capitalize'> <h3>travel footage</h3></a>
                    <p>This portfolio showcases cars from a unique aerial perspective, captured by drones. It includes shots of cars on the road and in scenic locations</p>
                </div>
                <div className='protfolio-pages-more'>
                <a href='/TravelFootage' className='protfolio-pages mt-5 mb-4' to="/internal-route">View More<span className='protfolio-arrow ms-5'>&#8594;</span></a>
                </div>
            </Col>
            <Col md={{span:'6', offset:'0', order:'last'}} xs={{span:'12', offset:'0', order:'first'}} >
            <a href='abs' className='protfolio-btn-link'>
            </a>
            <a href='/TravelFootage'><div className='camera-man mt-5'>
            <img src="https://i.ibb.co/MGvdQXd/photo.webp" alt="camera-man" border="0" />
            </div></a>
            </Col>
            </Row>
        </Container>
        <Footer />
        </>
    )
}