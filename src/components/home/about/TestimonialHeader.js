import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './TestimonialHeader.css';
import Navigation from  '../Nav';


export default function TestimonialHeader(){
    return(
        <>
      <Container fluid className='faq-bg-image'>
        <Navigation />
        <Row className =' testimonial  d-flex  text-center align-items-center justify-content-center '>
          <h1 className='text-capitalize'>
          reviews of our services
          </h1>
        </Row>
        </Container>
        </>
    )
}







