import React, { useState } from "react";
import './FaqPageQuestion.css';
import Container from 'react-bootstrap/Container';
import { Row, Col } from 'react-bootstrap';

export default function FaqPageQuestion() {
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

  const faqData2 = [
    {
      question: "How do drones avoid obstacles?",
      answer:
        "Drones navigate using a combination of sensors, GPS (Global Positioning System), and onboard cameras. GPS provides location data, while sensors such as accelerometers, gyroscopes, and altimeters help with stability and positioning. Obstacle avoidance systems use various techniques like optical sensors, ultrasonic sensors, or lidar to detect and avoid objects in the drone's path",
    },
    {
      question: "What are existing regulations for drones?",
      answer:
        "Regulations regarding drone operations vary by country. In general, there are guidelines and restrictions for drone flights related to altitude limits, distance from airports or populated areas, privacy concerns, and the need for registration or licensing. It is essential to check the specific regulations of your country or region before flying a drone",
    },
    {
      question: "What are the safety considerations?",
      answer:
        "When flying a drone, it's important to follow safety guidelines to prevent accidents or damage. Some key considerations include maintaining visual line of sight, avoiding restricted areas, respecting privacy and property rights, flying in suitable weather conditions, and being mindful of other people and aircraft in the vicinity. It is also crucial to understand the specific safety features and flight limitations of your drone model.",
    },
    // Add more FAQ items here
  ];

  const [openAnswers1, setOpenAnswers1] = useState({});
  const [openAnswers2, setOpenAnswers2] = useState({});

  // Function to toggle the visibility of an answer for container-1
  const toggleAnswer1 = (index) => {
    setOpenAnswers1((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the value
    }));
  };

  // Function to toggle the visibility of an answer for container-2
  const toggleAnswer2 = (index) => {
    setOpenAnswers2((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the value
    }));
  };

  return (
    <div className="faq-page-bg mt-0">
      <Container className='pt-5 pb-5'>
        <Row >
          <Col lg={12} xs={12} className='pt-5 pb-5' >
            <div className='faq-portion'>
              <h6 className='text-uppercase'>faq</h6>
              <h2 className='text-capitalize mt-4'>Most common questions</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={6} xs={12} className='p-0'>
            <div className="container container-1">
              {faqData.map((item, index) => (
                <div key={index} className="faq-item">
                  <div
                    className=" mt-3 faq-question d-flex justify-content-between align-item-center"
                    onClick={() => toggleAnswer1(index)}
                  >
                    <h4 className="faq-question-text">{item.question}</h4>
                    {openAnswers1[index] ? (
                      <span className="faq-icon">x</span>
                    ) : (
                      <span className="faq-icon">+</span>
                    )}
                  </div>
                  {openAnswers1[index] && (<p className="faq-answer">{item.answer}</p>)}
                  {index !== faqData.length - 1 && <hr />}
                </div>
              ))}
            </div>
          </Col>
          <Col lg={6} xs={12}>
            <div className="container container-2">
              {faqData2.map((item, index) => (
                <div key={index} className="faq-item">
                  <div
                    className=" mt-3 faq-question d-flex justify-content-between align-item-center"
                    onClick={() => toggleAnswer2(index)}
                  >
                    <h4 className="faq-question-text">{item.question}</h4>
                    {openAnswers2[index] ? (
                      <span className="faq-icon">x</span>
                    ) : (
                      <span className="faq-icon">+</span>
                    )}
                  </div>
                  {openAnswers2[index] && (<p className="faq-answer">{item.answer}</p>)}
                  {index !== faqData2.length - 1 && <hr />}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      </div>
  );
}
