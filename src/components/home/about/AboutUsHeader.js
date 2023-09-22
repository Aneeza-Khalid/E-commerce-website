import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './AboutUsHeader.css';
import Navigation from '../Nav';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {useEffect} from 'react';

export default function AboutUsHeader(){
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds for this section
    });
  }, []);
    return(
      <>
     
      <Container fluid className='abt-bg-image pt-3'>
         <Navigation />
        <Row className =' about-us-title d-flex flex-column text-center align-items-center justify-content-center' data-aos="fade-up">
          <h1>
          About Us
          </h1>
            <h5 className='text-align-center'>
            We are a dedicated team of enthusiasts who have come together to create a hub for drone lovers, hobbyists, and professionals alike
            </h5>
        </Row>
        </Container>
      </>
    )
       
    
}