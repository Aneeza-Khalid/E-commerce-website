import './OurTeamPageHeader.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function OurTeamPageHeader(){
    return(
        <>
        <Container fluid className='team-bg-image'>
            <Container>
        <Row className =' about-us-title '>
          <h1 className='ps-3'>
          Our Team
          </h1>
            <h5 className='ps-2 text-align-center'>
            Experience breathtaking aerial perspectives with our cutting-edge drone technology.
            </h5>
        </Row>
        </Container>
        </Container>

        </>
    )
}