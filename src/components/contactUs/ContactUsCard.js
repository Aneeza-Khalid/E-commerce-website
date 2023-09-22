import './ContactUsCard.css';
import React from 'react';
import  {Col, Row, Container } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {useEffect} from 'react';



export default function ContactUsCard(){
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds for this section
        });
      }, []);
    return(
        <>
        <Container className='mt-5'>
            <Row>
            <Col md={4} xs={12} data-aos="fade-up">
                     <div className='pe-3 our-values-card mt-5 contact-us p-4' >
                        <h5>Services</h5>
                        <div className='contact-number-line'></div>
                        <p className='mt-3'>Our comprehensive drone services offer a range of solutions to meet your needs.</p>
                        <a  href='/Pricing' className='text-capitalize text-decoration-none contact-learn '> Learn more <span className='contact-arrow ms-5'>&rarr;</span> </a>
                        </div>
                    </Col>
            <Col md={4} xs={12} data-aos="fade-up">
                     <div className='pe-3 our-values-card mt-5 contact-us p-4'>
                        <h5>Pricing</h5>
                        <div className='contact-number-line'></div>
                        <p className='mt-3'>Our drone pricing competitive and flexible, catering to a range of budgets and requirements.</p>
                        <a  href='/Pricing' className='text-capitalize text-decoration-none contact-learn '> Learn more <span className='contact-arrow ms-5'>&rarr;</span> </a>
                        </div>
                    </Col>
            <Col md={4} xs={12} data-aos="fade-up">
                     <div className='pe-3 our-values-card mt-5 contact-us p-4'>
                        <h5>Support</h5>
                        <div className='contact-number-line'></div>
                        <p className='mt-3'>Feel free to contact our dedicated support team for swift and reliable assistance.</p>
                        <a  href='/Pricing' className='text-capitalize text-decoration-none contact-learn '> Learn more <span className='contact-arrow ms-5'>&rarr;</span> </a>
                        </div>
                    </Col>
            </Row>
        </Container>
        </>
    )
}