import './ProtfolioPageHeader.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Navigation from '../home/Nav';




export default function ProtfolioPageHeader(){
    return(
        <>
        <Container fluid className='team-bg-image protfolio-page-bg-image'>
            <Navigation />
            <Container>
        <Row className ='our-team-title about-us-title'>
          <h1 className='text-capitalize'>
          Our protfolio
          </h1>
            <h5 className='ps-2 mt-2 text-align-center'>
            Unlock the beauty of aerial views and document your adventures
            </h5>
        </Row>
        </Container>
        </Container>
        </>
    )
}