import GalleryHeader from './GalleryHeader';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './Gallery.css';
import { Container, Row, Col } from 'react-bootstrap';
import LogosA from "../LogosA";
import Footer from '../Footer';


export default function Gallery(){
    return(
        <>
        <GalleryHeader />
        <Container className='about-gap'>
        <Tabs
      defaultActiveKey="home"
      transition={false}
      id="noanim-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="All">
        <Row className=' about-gap'>
            <Col md={6} xs={12} className='mt-4'>
                <a href='12'>
                    <div className='gallery-image'>
                <img src="https://i.ibb.co/94CXnjB/plants.jpg" alt="plants" border="0" />
                </div></a>
            </Col>
            <Col md={6} xs={12} className='mt-4'>
                    <a href='123'><div className='gallery-image-1'>
                    <img src="https://i.ibb.co/MGvdQXd/photo.webp" alt="camera" border="0" />
                    <img className='mt-5' src="https://i.ibb.co/nPPSXFF/upper-view.webp" alt="upper-view" border="0" />
                </div>
                    </a>
            </Col>
            {/*second row*/}
            <Col md={6} xs={12} > 
                
                    <a href='123'><div className='gallery-image-1'>
                    <img src="https://i.ibb.co/RHQy5vj/car-image.webp" alt="car" border="0"/>
                    <img className='mt-5' src="https://i.ibb.co/HXkWLHm/jeep-image.webp" alt="jeep" border="0" />
                </div>
                    </a>
            </Col>
            <Col md={6} xs={12}>
                <a href='12'>
                    <div className='gallery-image'>
                    <img src="https://i.ibb.co/NL3Pgtf/mountains.webp" alt="mountains" border="0" />
                </div></a>
            </Col>
        </Row>
      </Tab>
      
      <Tab eventKey="profile" title="Travel">
      <Row className='about-gap'>
            <Col md={6} xs={12} className='mt-4'>
                <a href='12'>
                    <div className='gallery-image'>
                <img src="https://i.ibb.co/94CXnjB/plants.jpg" alt="plants" border="0" />
                </div></a>
            </Col>
            <Col md={6} xs={12} className='mt-4'>
                    <a href='123'><div className='gallery-image-1'>
                    <img src="https://i.ibb.co/MGvdQXd/photo.webp" alt="camera" border="0" />
                    <img className='mt-5' src="https://i.ibb.co/nPPSXFF/upper-view.webp" alt="upper-view" border="0" />
                </div>
                    </a>
            </Col>
            </Row>
      
      </Tab>
      <Tab eventKey="hello" title="Filmography">
        <Row className='about-gap' >
        <Col md={6} xs={12} > 
                
                <a href='123'><div className='gallery-image-1'>
                <img src="https://i.ibb.co/RHQy5vj/car-image.webp" alt="car" border="0"/>
                <img className='mt-5' src="https://i.ibb.co/HXkWLHm/jeep-image.webp" alt="jeep" border="0" />
            </div>
                </a>
        </Col>
        <Col md={6} xs={12}>
            <a href='12'>
                <div className='gallery-image'>
                <img src="https://i.ibb.co/NL3Pgtf/mountains.webp" alt="mountains" border="0" />
            </div></a>
        </Col>
    </Row>
      </Tab>
    </Tabs>
        </Container>
        <hr className='section-line-gallery'></hr>
        <LogosA />
        <br/>
        <Footer className='about-gap' />
        </>
    )
}