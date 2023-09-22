import React from 'react'
import Navigation from './Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HomeBheader.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {useEffect} from 'react';


export default function HomeBheader() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds for this section
    });
  }, []);
  return (
    <div className='Header-container'>
       <div className="image-background">
  {/* eslint-disable-next-line */}
  <img className='bg-image' src='https://i.ibb.co/GTDTKFh/Home-B-background.webp'alt='drone-bg'/>
</div>
      <Container fluid className='p-0'>
      <Navigation />
      <Container >
        <Row>
          <Col xs={12} md={6} className =' title-holder-1' data-aos="fade-up">
          <h1>
          Navigate The Skies
          </h1>
          </Col>
          <Col xs={12} md={7} className =' text-holder-1' data-aos="fade-up">
            <h5>
            Explore the world from a new perspective with our advanced drone technology.
            </h5>
            <div className='header-c' data-aos="fade-up">
              <a href='/AboutUs' className='headerUs'>Read More About Us<span className='header-b-arrow'>&#8594;</span></a>
            </div>
          </Col>
        </Row>

        </Container>
      </Container>
      
    </div>
  )
}
