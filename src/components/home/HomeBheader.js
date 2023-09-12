import React from 'react'
import Navigation from './Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './HomeBheader.css';
//import { Link } from 'react-router-dom';


export default function HomeBheader() {
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
          <Col xs={12} md={6} className =' title-holder-1'>
          <h1>
          Navigate The Skies
          </h1>
          </Col>
          <Col xs={12} md={7} className =' text-holder-1'>
            <h5>
            Explore the world from a new perspective with our advanced drone technology.
            </h5>
            <div className='header-c'>
              <a href='/' className='headerUs'>Read More About Us<span className='header-b-arrow'>&#8594;</span></a>
            </div>
          </Col>
        </Row>

        </Container>
      </Container>
      
    </div>
  )
}
