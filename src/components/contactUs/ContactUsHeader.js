import './ContactUsHeader.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navigation from '../home/Nav';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import {useEffect} from 'react';

export default function ContactUsHeader(){
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds for this section
        });
      }, []);
    return(
        <>
         <Container fluid className='contact-bg-image'>
            <Navigation />
            <Container>
        <Row className =' our-team-title about-us-title' data-aos="fade-up">
          <h1 className='text-capitalize'>
          contact us
          </h1>
            <h5 className='ps-2 mt-2 text-align-center'>
            Elevate your storytelling with our captivating drone photography and videography services.
            </h5>
        </Row>
        </Container>
        </Container>

        </>
    )
}