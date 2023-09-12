import React from 'react'
import Navigation from './Nav'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Header.css';
import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <div className='Heder-container'>
       <div className="video-background">
  {/* eslint-disable-next-line */}
  <iframe
    src="https://www.youtube.com/shorts/sFdoPfj3TAM?feature=share" frameBorder="0"
    allowFullScreen
    className="bg-video"
  ></iframe>
</div>
      <Container fluid className='p-0'>
      <Navigation />
      <Container >
        <Row>
          <Col xl={6} md={8} xs={12} className ='order-md-1 title-holder'>
          <h1>
          A New Era Of Drones
          </h1>
          </Col>
          <Col xl={6} lg={6} md={8} xs={12} className ='order-md-2 text-holder'>
            <h5>
            Even more speed. Even more stability. Everything youmight need – in a brand new Drone.
            </h5>
            <div className='abouts'>
           <Link className='headerUs' to="/internal-route">Read More About Us <span className='arrow'>&#8594;</span></Link>
            </div>
          </Col>
        </Row>

        </Container>
      </Container>
      
    </div>
  )
}
