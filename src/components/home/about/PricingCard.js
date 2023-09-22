import './PricingCard.css';
import Container from 'react-bootstrap/Container';
import {Row, Col, Button} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export default function PricingCard(){
    return(
        <>
    <Container className='about-gap'>
        <Row>
            <Col lg={4} md={6} xs={12} className='mt-4'>
                <Card className='pt-4 pb-3 ps-4 pe-4'>
                    <div className='pricing-plan ps-1 pe-1'>
                        <h5 className='mt-2'>Basic</h5>
                        <h1 className='mt-3'>
                            59 USD
                        </h1>
                        <p className='mt-4'>Provides a budget-friendly option for fulfilling aerial mapping and surveying requirements.</p>
                        <h6 className='mt-5'>
                            3D modeling
                        </h6>
                        <hr />
                        <h6 className='mt-3'>
                            High-resolution imagery
                        </h6>
                        <hr />
                        <h6 className='mt-3'>
                            4 hours flight time
                        </h6>
                        <hr />
                    </div>
                    <a href='/ContactUs' className='mt-lg-4 mt-md-5  link-tag d-flex align-item-center justify-content-center'> <Button className='pricing-btn protfolio-btn'> Buy Now</Button> </a>
                </Card>
            </Col>
            <Col lg={4} md={6} xs={12} className='mt-4'>
            <Card className='pt-4 pb-3 ps-4 pe-4 '>
                    <div className='pricing-plan ps-1 pe-1'>
                    <div className='pricing-popular-block'>
                        <p>Popular</p>
                    </div>
                        <h5 className='mt-2'>Premium</h5>
                        <h1 className='mt-3'>
                            129 USD
                        </h1>
                        <p className='mt-4'>You gain access to advanced features and capabilities, including high-resolution imagery.</p>
                        <h6 className='mt-5'>
                            3D modeling
                        </h6>
                        <hr />
                        <h6 className='mt-3'>
                            High-resolution imagery
                        </h6>
                        <hr />
                        <h6 className='mt-3'>
                            4 hours flight time
                        </h6>
                        <hr />
                    </div>
                    <a href='/ContactUs' className='mt-4 link-tag d-flex align-item-center justify-content-center'> <Button className='pricing-btn protfolio-btn'> Buy Now</Button> </a>
                    
                </Card>
            </Col>
            <Col lg={{span: '4', offset:'0'}} md={{span: '6', offset:'2'}} xs={{span: '12', offset:'0'}} className='mt-4'>
            <Card className='pt-4 pb-3 ps-4 pe-4 mt-lg-0 mt-md-4'>
                    <div className='pricing-plan ps-1 pe-1'>
                        <h5 className='mt-2'>Expert</h5>
                        <h1 className='mt-3'>
                            239 USD
                        </h1>
                        <p className='mt-4'>With flexible pricing options you can deliverables that align with your project needs</p>
                        <h6 className='mt-5'>
                            3D modeling
                        </h6>
                        <hr />
                        <h6 className='mt-3'>
                            High-resolution imagery
                        </h6>
                        <hr />
                        <h6 className='mt-3'>
                            4 hours flight time
                        </h6>
                        <hr />
                    </div>
                    <a href='/ContactUs' className='mt-4 link-tag d-flex align-item-center justify-content-center'> <Button className='pricing-btn protfolio-btn'> Buy Now</Button> </a>
                </Card>
            </Col>

        </Row>

    </Container>
    </>
    )
    
}