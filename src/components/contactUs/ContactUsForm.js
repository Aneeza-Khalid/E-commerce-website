import './ContactUsForm.css';
import React from 'react';
import  {Col, Row, Container, Button } from 'react-bootstrap';
import {BsFillTelephoneFill, BsFillEnvelopeFill, BsGeoAltFill} from 'react-icons/bs';
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {useEffect} from 'react';


export default function ContactUsForm(){
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds for this section
    });
  }, []);
    const [formData, setFormData] = useState({
        fname: '',
        email: '',
        message: '',
      });
      const [errors, setErrors] = useState({});
      const [isSubmitting, setIsSubmitting] = useState(false);
      const [submissionStatus, setSubmissionStatus] = useState('');
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate the form fields
        const validationErrors = {};
        if (!formData.fname.trim()) {
          validationErrors.fname = 'Please fill in your name';
        }
        if (!formData.email.trim()) {
          validationErrors.email = 'Please fill in your email';
        } else if (!isValidEmail(formData.email)) {
          validationErrors.email = 'Invalid email format';
        }
        if (!formData.message.trim()) {
          validationErrors.message = 'Please fill in your message';
        }
    
        setErrors(validationErrors);
    
        if (Object.keys(validationErrors).length === 0) {
          // If no validation errors, go ahead with form submission
          setIsSubmitting(true);
    
          
          await simulateSubmission();
    
          setIsSubmitting(false);
          setSubmissionStatus(' Thank you! Your submission has been received');
    
          //  For Clearing form data after submission
          setFormData({
            fname: '',
            email: '',
            message: '',
          });
        }
      };
    
      // Function to check if email is in a valid format
      const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
      };
      const simulateSubmission = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 3000); // Simulate a 3-second delay
        });
      };
    return(
        <>
        <Container className='custom-gap'>
            <Row>
                <Col lg={6}> {/* left side of the contact detail portion */}
                    <div className='contact-detail mb-5' data-aos="fade-up">
                    <h6 className='text-capitalize'>Get in touch</h6>
                    <h1 className='text-capitalize'>contact our support team</h1>
                    <p className='mt-5'>
                    Get in touch with our dedicated support team for prompt assistance. We are here to address your inquiries and provide the help you need.
                    </p>
                    <hr className='mt-5'/>
                    <a className='text-decoration-none detail-icon' href='https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&z=7&mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&ll=51.470910462064595%2C-0.2021954999999931'> < BsGeoAltFill/> <span className='ms-4 text-capitalize detail' >Totenham road, london, england</span></a>
                    <br/>
                    <br/>
                    <a className='text-decoration-none detail-icon' href='_'> <BsFillTelephoneFill/> <span className='ms-4 detail' >+123 456789</span></a> <br/> 
                    <br/>
                    <a className='text-decoration-none detail-icon' href='_'><BsFillEnvelopeFill/> <span className='ms-4 detail' >information@official.com</span></a>
                    </div>
                </Col>
                <Col lg={6}> {/* right side of the  contact detail portion */}

                <div>
      {submissionStatus ? (
        <p className="success-message d-flex justify-content-center align-items-center">{submissionStatus}</p>
      ) : (
        <form className='ps-5' onSubmit={handleSubmit}>
          <div className='input-container'>
            <input
              type='text'
              id='fname'
              name='fname'
              placeholder='Your Name'
              className={`w-100 input-area p-2 ${errors.fname ? 'is-invalid' : ''}`}
              value={formData.fname}
              onChange={handleChange}
            />
            {errors.fname && <p className='error-message'>{errors.fname}</p>}
          </div>
          <div className='input-container mt-3'>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Your Email'
              className={`w-100 input-area p-2 ${errors.email ? 'is-invalid' : ''}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className='error-message'>{errors.email}</p>}
          </div>
          <div className='input-container'>
            <textarea
              id='message'
              name='message'
              placeholder='Your Text'
              className={`w-100 text-area mt-4 ps-2 ${errors.message ? 'is-invalid' : ''}`}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className='error-message'>{errors.message}</p>}
          </div>
          {isSubmitting ? (
            <Button className='submit-btn'>Please wait...</Button>
          ) : (
            <Button type='submit' className='mt-3 blue-btn'>
              Submit
            </Button>
          )}
        </form>
      )}
    </div>
                
                 </Col>
            </Row>
        </Container>
        </>
    )
}