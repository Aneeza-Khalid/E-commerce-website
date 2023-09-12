import React, { useState } from "react";
import './FaqPrice.css';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

export default function FaqPrice() {
  const faqData = [
    {
      question: "What are the main use of drones?",
      answer:
        "Drones have a wide range of uses, including aerial photography and videography, surveying and mapping, delivery services, search and rescue operations, monitoring of agricultural crops, and inspection of infrastructure and buildings.",
    },
    {
      question: "What are the different types of drones?",
      answer:
        "Drones come in various types, such as quadcopters (four rotors), hexacopters (six rotors), fixed-wing drones (with wings for sustained flight), and multi-rotor drones (more than four rotors). Each type has different capabilities and is suitable for specific applications.",
    },
    {
      question: "What are the benefits of using drones?",
      answer:
        "Drones offer numerous benefits, including cost-effectiveness, efficiency in data collection, accessibility to hard-to-reach areas, reduced risk to human operators, ability to capture high-resolution imagery and videos, and improved safety in certain applications like inspections and surveillance",
    },
    // Add more FAQ items here
  ];

  // State to keep track of which answers are open
  const [openAnswers, setOpenAnswers] = useState({});

  // Function to toggle the visibility of an answer
  const toggleAnswer = (index) => {
    setOpenAnswers((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the value
    }));
  };

  return (
    <>
     <div className='faq-line'> <hr ></hr>
      <Container className='about-gap mb-5'>
        <Row>
          <Col lg={4} xs={12} >
            <div className='faq-portion'>
              <h6 className='text-uppercase'>faq</h6>
              <h2 className='text-capitalize mt-4'>Most common questions</h2>
            </div>
          </Col>
          <Col lg={8} xs={12} >
            <div className="container">
              {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                  <div
                    className=" mt-3 faq-question d-flex justify-content-between align-item-center"
                    onClick={() => toggleAnswer(index)}
                  >
                    <h4 className="faq-question-text">{item.question}</h4>
                    {openAnswers[index] ? (
                      <span className="faq-icon">x</span>
                    ) : (
                      <span className="faq-icon">+</span>
                    )}
                  </div>
                  {openAnswers[index] && (<p className="faq-answer">{item.answer}</p>)}
                  {index !== faqData.length - 1 && <hr />}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      
      </div>
    </>
  );
}
