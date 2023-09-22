import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Nav.css';
export default function Navigation() {
  return (
    <Container className='mt-3'>
    <Navbar expand="lg" className="custom-navbar">
        <Navbar.Brand href="#home" className='lg:px-5 ms-5' >
        <img src='https://assets.website-files.com/6450b31696e25f8aa6cdd7b0/64522ec803e23e80fd7d970b_white%20logo.svg' alt='drone'/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="me-3" />
        <Navbar.Collapse id="basic-navbar-nav" className='Navbar-collapse'>
          <Nav className="me-auto">
            <NavDropdown className="lg:ms-5 px-4 sm:px-0 sm:ms-0" title="Demos" id="home-dropdown">
            <NavDropdown.Item href='/'>Home 1</NavDropdown.Item>
            <NavDropdown.Item href="/HomeB">Home 2</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="px-4" title="About" id="about-dropdown">
            <NavDropdown.Item href="/AboutUs">About Us</NavDropdown.Item>
            <NavDropdown.Item href="/OurTeamPage">Our Team</NavDropdown.Item>
            <NavDropdown.Item href="/Pricing">Pricing</NavDropdown.Item>
            <NavDropdown.Item href="/Gallery">Gallery</NavDropdown.Item>
            <NavDropdown.Item href="/Testimonials">Testimonials</NavDropdown.Item>
            <NavDropdown.Item href="/FaqPage">FAQ</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="px-4 nav-link-pages" href="#portfolio">Services</Nav.Link>
            <NavDropdown  title="Protfolio" id="Home-dropdown" className="lg:ms-5 px-4 xs:px-0 xs:ms-0" style={{ color: 'white' }}>
            <NavDropdown.Item href="/ProtfolioPage">Protfolio</NavDropdown.Item>
            <NavDropdown.Item href="/TravelFootage">Protfolio Detail</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="px-4 nav-link-pages" href="#shop">Shop</Nav.Link>
            <NavDropdown 
              title="All Pages"
              id="all-pages-dropdown"
              className="multi-column-dropdown px-4 nav-link-pages">
              <div className="dropdown-mega-menu">
                <div className="container"> {/* show dropdown in different col*/}
                  <div className="row">
                    <div className="col-md-4">
                      <NavDropdown.Item href="/">Home 1</NavDropdown.Item>
                      <NavDropdown.Item href="/HomeB">Home 2</NavDropdown.Item>
                      <NavDropdown.Item href="/AboutUs">About Us</NavDropdown.Item>
                      <NavDropdown.Item href="/Servivces">Services</NavDropdown.Item>
                      <NavDropdown.Item href="/OurTeamPage">Our Team</NavDropdown.Item>
                      <NavDropdown.Item href="/Pricing" className='mb-0'>Pricing</NavDropdown.Item>
                    </div>
                    <div className="col-md-4">
                      <NavDropdown.Item href="/ProtfolioPage">Protfolio</NavDropdown.Item>
                      <NavDropdown.Item href="/TravelFootage">Protfolio Details</NavDropdown.Item>
                      <NavDropdown.Item href="/Gallery">Gallery</NavDropdown.Item>
                      <NavDropdown.Item href="/FaqPage">FAQ</NavDropdown.Item>
                      <NavDropdown.Item href="/Testimonials">Testimonials</NavDropdown.Item>
                      <NavDropdown.Item href="/ContactUs" className='mb-0 mt-0'>Contact Us</NavDropdown.Item>
                    </div>
                    <div className="col-md-4">
                    <NavDropdown.Item href="/Location">Location</NavDropdown.Item>
                    <NavDropdown.Item href="/Shop">Shop</NavDropdown.Item>
                    <NavDropdown.Item href="/ShopDetailFour" className='mb-0 mt-0'>Shop Details</NavDropdown.Item>
                    </div>
                  </div>
                </div>
              </div>
            </NavDropdown>
            <FontAwesomeIcon className='ms-5 me-3 ps-5 py-2 d-lg-inline d-none cart'  icon={faShoppingCart} />
            <Button href='/ContactUs' className=" lg:px-2 md:me-5 me-0 ms-3 py-2 btn-white-blue">Get in Touch</Button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>

      
    </Container>
  );
}
