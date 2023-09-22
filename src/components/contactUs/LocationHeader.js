import './LocationHeader.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navigation from '../home/Nav';

export default function LocationHeader(){
    return(
        <>
        <Container fluid className='faq-bg-image'>
        <Navigation />
        <Row className =' about-us-title faq-page d-flex text-center align-items-center justify-content-center '>
          <h1 className='text-capitalize'>
          Location
          </h1>
        </Row>
        </Container>
        </>
    )
}