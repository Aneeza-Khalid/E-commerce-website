import './TestimonialBody.css';
import React from 'react';
import  {Col, Row, Container } from 'react-bootstrap';




export default function TestimonialBody(){
    return(
        <>
        <Container className='about-gap mb-5'>
            <Row>
            <Col lg={4} xs={12}>
                     <div className='pe-3 our-values-card mt-5 testimonials pt-5 ps-3'>
                        <h5 >01</h5>
                        <div className='card-number-line'></div>
                        <h4 className='mt-3 text-capitalize'>Robert Fox</h4>
                        <p className='mt-3'>"I absolutely love this drone! The image quality is fantastic, and the controls are easy to use. It's a great choice for both beginners and experienced pilots."</p>
                        <h6 className='testimonial-date pb-2 mt-4'>22/4/22</h6>
                     </div>
                    </Col>
            <Col lg={4} xs={12}>
                     <div className='pe-3 our-values-card mt-5 testimonials pt-5 ps-3'>
                        <h5 >02</h5>
                        <div className='card-number-line'></div>
                        <h4 className='mt-3 text-capitalize'> jacob jones</h4>
                        <p className='mt-3'>"The drone's stability and flight time exceeded my expectations. It's durable and handles well even in windy conditions. Highly recommended for aerial photography enthusiasts."</p>
                        <h6 className='testimonial-date pb-2 mt-4'>13/4/22</h6>
                     </div>
                    </Col>
            <Col lg={4} xs={12}>
                     <div className='pe-3 our-values-card mt-5 testimonials pt-5 ps-3'>
                        <h5 >03</h5>
                        <div className='card-number-line'></div>
                        <h4 className='mt-3 text-capitalize'>Kristin Watson</h4>
                        <p className='mt-3'>"I've had several drones before, but this one stands out for its advanced features and obstacle avoidance capabilities. It's a safe option for capturing stunning aerial footage."</p>
                        <h6 className='testimonial-date pb-2 mt-4'>19/3/22</h6>
                     </div>
                    </Col>
               </Row>
               <Row className='mt-4 mb-4'>
               <Col lg={{span:'8', offset:'2'}}>
                  <div className='testimonial-middle d-flex flex-column justify-content-center align-item-center'>
                      <h2 className='text-center'>"I've owned multiple drones over the years, and this one stands out for its incredible range. It has solid connectivity and precise controls, making it an excellent option for long-distance flights."</h2>
                      <p className='text-center mt-2'>John Wong</p>
                  </div>
                 
               </Col>
             </Row>
            <Row>
            <Col lg={4} xs={12}>
                     <div className='pe-3 our-values-card mt-5 testimonials pt-5 ps-3'>
                        <h5 >04</h5>
                        <div className='card-number-line'></div>
                        <h4 className='mt-3 text-capitalize'>Ken Torrin</h4>
                        <p className='mt-3'>"As a professional videographer, this drone has become an essential tool in my kit. It offers incredible cinematic shots and the ability to track subjects accurately."</p>
                        <h6 className='testimonial-date pb-2 mt-4'>22/10/21</h6>
                     </div>
                    </Col>
            <Col lg={4} xs={12}>
                     <div className='pe-3 our-values-card mt-5 testimonials pt-5 ps-3'>
                        <h5 >05</h5>
                        <div className='card-number-line'></div>
                        <h4 className='mt-3 text-capitalize'> Cameron Williamson</h4>
                        <p className='mt-3'>"This drone is perfect for beginners like me. It's easy to fly, and the flight stability is impressive. The integrated camera takes high-quality photos and videos. I'm thrilled with my purchase."</p>
                        <h6 className='testimonial-date pb-2 mt-4'>22/10/21</h6>
                     </div>
                    </Col>
            <Col lg={4} xs={12}>
                     <div className='pe-3 our-values-card mt-5 testimonials pt-5 ps-3'>
                        <h5 >06</h5>
                        <div className='card-number-line'></div>
                        <h4 className='mt-3 text-capitalize'>Esther Howard</h4>
                        <p className='mt-3'>
"I've used this drone extensively for inspections of tall structures. Its compact size, powerful camera, and long battery life make it an excellent choice for industrial applications." </p>
                        <h6 className='testimonial-date pb-2 mt-4'>22/10/21</h6>
                     </div>
                    </Col>
            </Row>

        </Container>
        </>
    )
}