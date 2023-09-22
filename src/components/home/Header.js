import React from 'react'
import Navigation from './Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {useEffect} from 'react';

export default function Header() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds for this section
    });
  }, []);
  return (
    <Container fluid className=''>
      <div className='video-background'>
        
        <video autoPlay muted>
          <source
            src="https://assets.website-files.com/6450b31696e25f8aa6cdd7b0/646f088ca1a027c73d73b145_video background -transcode.mp4"
            frameBorder="0"
            allowFullScreen
            type='video/mp4'
            className="bg-video"
          />
        </video>
      </div>
      <Navigation />
      <Container>
        <Row>
          <Col xl={6} md={8} xs={12} className='title-holder' data-aos="fade-up">
            <h1>A New Era Of Drones</h1>
          </Col>
          <Col lg={6} md={8} xs={12} className='text-holder' data-aos="fade-up">
            <h5>Even more speed. Even more stability. Everything you might need – in a brand new Drone.</h5>
            <div className='abouts' data-aos="fade-up">
              <a href='/AboutUs' className='headerUs text-capitalize ps-3'>Read More About Us <span className='arrow'>&#8594;</span></a>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
