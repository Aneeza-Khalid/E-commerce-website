import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Protfolio.css';
import { Link } from 'react-router-dom';


export default function Protfolio(){
    return(
        <>
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
                <div className='protfolio-pages-more'>
                <Link className='protfolio-pages mt-5 mb-4' to="/internal-route">View More<span className='protfolio-arrow ms-5'>&#8594;</span></Link>
                </div>
            </Col>
            <Col md={6}>
            <Link className='protfolio-btn-link'>
              <div className='d-flex justify-content-between'>
                <div></div> {/* This is an empty div to create space on the left */}
                <Button className='py-2 px-4 mt-4 protfolio-btn mb-4'>View More</Button>
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
                <div className='protfolio-pages-more'>
                <Link className='protfolio-pages mt-5 mb-4' to="/internal-route">View More<span className='protfolio-arrow ms-5'>&#8594;</span></Link>
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
                <div className='protfolio-pages-more'>
                <Link className='protfolio-pages mt-5 mb-4' to="/internal-route">View More<span className='protfolio-arrow ms-5'>&#8594;</span></Link>
                </div>
            </Col>
            <Col md={6}>
            <div className='protfolios-image mb-5'>
                <img src="https://i.ibb.co/ZfVTkP4/arial-viw.jpg" alt="arial-viw" border="0" />
            </div>
            </Col>
        </Row>
    </Container>
</section> 
        </>




    )}