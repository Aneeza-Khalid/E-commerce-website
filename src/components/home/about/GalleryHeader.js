import  {Col, Row, Container } from 'react-bootstrap';
import './GalleryHeader.css';

export default function GalleryHeader(){
    return(
        <>
        <Container fluid className='team-bg-image'>
            <Container>
        <Row >
            <Col lg={6} md={8} xs={12} className =' about-us-title ps-lg-5 ' >
            <h1 className='ps-3'>
          Gallery
          </h1>
            <h5 className='ps-2 text-align-center'>
            Experience breathtaking aerial perspectives with our cutting-edge drone technology.
            </h5>
            </Col>
          
        </Row>
        </Container>
        </Container>

        </>
    )
}