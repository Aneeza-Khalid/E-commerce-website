import './OurTeamMessage.css';
import { Col, Row, Container } from 'react-bootstrap';
import { useState } from 'react';
//import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default function OurTeamMessage() {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
  }

  return (
    <>
      <Container className='about-gap mb-5 pb-5'>
        <Row>
          <Col md={6} sm={12} className='p-2'>
            <div>
              <div className="my-button modal-image" onClick={handleShow}>
                {/* You can add your image source here */}
                <img src="https://i.ibb.co/w7PSSQK/team-member.webp" alt="drone" />
                <FontAwesomeIcon icon={faPlay} className="play-icon" />
              </div>
              <Modal className='modal' show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton className='modal-content' ></Modal.Header>
                <Modal.Body className="video-modal-body">
                <iframe className='u-tube-video' width="716" height="403" src="https://www.youtube.com/embed/4k98kAk919M" title="You Will Love These Editing Techniques for Your Drone Footage! (CapCut Tutorial)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </Modal.Body>
              </Modal>
            </div>
          </Col>
          <Col md={6} sm={12} className='p-lg-5'>
            <div className='team-msg-text pt-lg-5'>
              <p>"We are a dedicated team of enthusiasts who have come together to create a hub for drone lovers, hobbyists, and professionals alike."</p>
            </div>
            <div className='d-flex flex-direction-column mt-4'>
              <div className='team-msg-image'>
                <img src="https://i.ibb.co/LYSmmzq/person-2.webp" alt="person-2" border="0" />
              </div>
              <div className='team-name ms-5'>
                <h2 className='text-capitalize'>Robert Fox</h2>
                <p>Photographer</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
