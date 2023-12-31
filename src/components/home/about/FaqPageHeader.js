import './FaqPageHeader.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navigation from '../Nav';

export default function FaqPageHeader(){
    return(
        <>
      <Container fluid className='faq-bg-image'>
        <Navigation />
        <Row className ='testimonial faq-page d-flex flex-direction-column text-center align-items-center justify-content-center '>
          <h1 className='text-capitalize'>
          Frequently asked questions
          </h1>
        </Row>
        </Container>
        </>
    )
}