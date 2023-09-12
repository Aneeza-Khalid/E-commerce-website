import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './TestimonialHeader.css';


export default function TestimonialHeader(){
    return(
        <>
      <Container fluid className='faq-bg-image'>
        <Row className =' about-us-title testimonial  d-flex flex-direction-column text-center align-items-center justify-content-center '>
        
          <h1 className='text-capitalize'>
          reviews of our services
          </h1>
        </Row>
        </Container>
        </>
    )
}







