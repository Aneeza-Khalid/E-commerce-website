import './ShopHeader.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'; 
import Navigation from '../home/Nav';
export default function ShopHeader(){
    return(
        <>
        <Container fluid className='shop-bg-image'>
            <Navigation />
            <Container>
        <Row className =' our-team-title about-us-title'>
          <h1 className='text-capitalize'>
          shop
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