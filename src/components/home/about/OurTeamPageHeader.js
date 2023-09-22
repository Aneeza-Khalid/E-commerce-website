import './OurTeamPageHeader.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Navigation from '../Nav';

export default function OurTeamPageHeader(){
    return(
        <>
        <Container fluid className='team-bg-image'>
            <Navigation />
            <Container>
        <Row className =' our-team-title about-us-title'>
          <h1 className='text-capitalize'>
          Our Team
          </h1>
            <h5 className='ps-2 mt-2 text-align-center'>
            Experience breathtaking aerial perspectives with our cutting-edge drone technology.
            </h5>
        </Row>
        </Container>
        </Container>

        </>
    )
}