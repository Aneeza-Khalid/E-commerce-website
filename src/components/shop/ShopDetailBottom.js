import { Container, Row, Col, Button } from 'react-bootstrap';
import './ShopDetailBottom';
import Footer from '../home/Footer';
import ShopEquipment from './ShopEquipment';
import './ShopDetailBottom.css';

export default function ShopDetailBottom(){
    return(
        <>
            <Container className='about-gap mb-5 pb-4'>
            <Row>
                <Col xs={12}>
                    <div>
                        <h6 className='text-capitalize text-primary text-lg fw-normal'>
                            products
                        </h6>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col md={{span:'8', offset:'0'}} xs={{span:'12', offset:'0'}}>
                    <h1 className='new-text text-capitalize'>Recent products</h1>

                </Col>
                <Col lg={{span:'2', offset:'2'}} md={{span:'3', offset:'0'}} xs={{span:'6', offset:'6'}} className='recent-btn'>
                   <Button className='blue-btn text-capitalize '> view more</Button>
                </Col>
            </Row>
            <ShopEquipment />
          
        </Container>
        <Footer />
        </>
    )
}