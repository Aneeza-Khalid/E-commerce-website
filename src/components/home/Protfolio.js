import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Protfolio.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {useEffect} from 'react';

export default function Protfolio(){
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds for this section
        });
      }, []);
    return(
        <>
        <section> {/*Protfolio*/}
    <Container className='custom-gap'>
        <Row className='mb-5'> {/* car photography*/}
            <Col md={6} >
                <div className='protfolio' data-aos="fade-up">
                <h5> Protfolio</h5>
                <h3 className='mt-4 mb-5'>Our Recent Work</h3>
                </div>
                <div className='protfolio-detail' data-aos="fade-up">
                    <p>May 1, 2023</p>
                    <a href='/ArialCar' className='protfolio-link'> <h3>Arial Car Photography</h3></a>
                    <p>This portfolio showcases cars from a unique aerial perspective, captured by drones. It includes shots of cars on the road and in scenic locations</p>
                </div>
                <div className='protfolio-pages-more' data-aos="fade-up">
                <a href='/ArialCar' className='protfolio-pages mt-3 mb-4' to="/internal-route">View More<span className='protfolio-arrow ms-5'>&#8594;</span></a>
                </div>
            </Col>
            <Col md={6}>
            <a href='/ProtfolioPage' className='protfolio-btn-link' data-aos="fade-up">
              <div className='d-flex justify-content-between'>
                <div></div> {/* This is an empty div to create space on the left */}
                <Button className='py-2 px-4 mt-4 protfolio-btn mb-4'>View More</Button>
                </div>
            </a>
            <a href='/ArialCar'>
                <div className='car-image mt-5'>
                     <img src="https://i.ibb.co/hHn7gnX/6454c3f7a687a33d64af28f7-car-image-p-800.jpg" alt="carimage" border="0"/>
            </div></a>
            </Col>
        </Row>
        <Row className=' mb-5' > {/* Drone filmography*/}
            <Col md={6}>
            <div className='protfolio-detail' data-aos="fade-up">
                    <p>May 1, 2023</p>
                    <a href='/DroneFilm' className='protfolio-link'> <h3>Drone Filmography</h3></a>
                    <p>This portfolio showcases cars from a unique aerial perspective, captured by drones. It includes shots of cars on the road and in scenic locations</p>
                </div>
                <div className='protfolio-pages-more' data-aos="fade-up">
                <a href='/DroneFilm' className='protfolio-pages mt-3 mb-4' to="/internal-route">View More<span className='protfolio-arrow ms-5'>&#8594;</span></a>
                </div>
            </Col>
            <Col md={6}>
                <a href='/DroneFilm'>
            <div className='drone-film mt-2'> 
            <img src="https://i.ibb.co/94CXnjB/plants.jpg" alt="plants" border="0"/>
            </div></a>
            </Col>
        </Row>
        <Row className='mt-5 mb-5 pb-5'> {/* Wedding Momments*/}
            <Col md={6}> 
            <div className='protfolio-detail' data-aos="fade-up"> 
                 <p>May 1, 2023</p>
                 <a href='/WeddingMomments' className='protfolio-link'> <h3>Wedding Momments</h3></a>
                 <p>This portfolio presents a collection of memorable moments fromweddings captured by drones.These shots offer a bird's eye viewof the special moments.</p>
                </div>
                <div className='protfolio-pages-more' data-aos="fade-up">
                <a href='/WeddingMomments' className='protfolio-pages mt-3 mb-4' to="/internal-route">View More<span className='protfolio-arrow ms-5'>&#8594;</span></a>
                </div>
            </Col>
            <Col md={6}>
                <a href='/WeddingMomments'>
                <div className='protfolios-image mb-5'>
             <div className='middle-part-image'>
               <img src="https://i.ibb.co/ZfVTkP4/arial-viw.jpg" alt="arial-view" border="0" />
              </div>
           </div>
                </a>
            </Col>
        </Row>
    </Container>
</section> 
        </>
    )}