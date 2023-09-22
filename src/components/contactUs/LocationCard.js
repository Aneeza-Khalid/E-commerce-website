import './LocationCard.css';
import {BsFillTelephoneFill, BsFillEnvelopeFill, BsGeoAltFill} from 'react-icons/bs';
import  {Col, Row, Container} from 'react-bootstrap';

export default function LocationCard(){
    return(
        <>
        <Container className='location-gap'>
            <Row>
                <Col md={6} >
                    <div className='location-card'>
                    <a className='text-decoration-none' href='https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&z=7&mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&ll=51.470910462064595%2C-0.2021954999999931'> < BsGeoAltFill/> <span className='ms-4 text-capitalize contact-adress' >Totenham road, london, england</span></a>
                    <br/>
                    <br/>
                    <a className='text-decoration-none' href='_'> <BsFillTelephoneFill/> <span className='ms-4 detail' >+123 456789</span></a> <br/> 
                    <br/>
                    <a className='text-decoration-none location-icon' href='_'><BsFillEnvelopeFill/> <span className='ms-4 detail' >information@official.com</span></a><br/>
                    <div className='mt-4'>
                    <a  href='_https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&z=7&mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&ll=51.470910462064595%2C-0.2021954999999931' className=' ps-1 text-capitalize text-decoration-none contact-learn '> Find us on map<span className='contact-arrow ms-5'>&rarr;</span> </a>
                    </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='location-card'>
                    <a className='text-decoration-none' href='https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&z=7&mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&ll=51.470910462064595%2C-0.2021954999999931'> < BsGeoAltFill/> <span className='ms-4 text-capitalize contact-adress' >Totenham road, london, england</span></a>
                    <br/>
                    <br/>
                    <a className='text-decoration-none' href='_'> <BsFillTelephoneFill/> <span className='ms-4 detail' >+123 456789</span></a> <br/> 
                    <br/>
                    <a className='text-decoration-none location-icon' href='_'><BsFillEnvelopeFill/> <span className='ms-4 detail' >information@official.com</span></a><br/>
                    <div className='mt-4'>
                    <a  href='_https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&z=7&mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&ll=51.470910462064595%2C-0.2021954999999931' className=' ps-1 text-capitalize text-decoration-none contact-learn '> Find us on map<span className='contact-arrow ms-5'>&rarr;</span> </a>
                    </div>
                    </div>
                </Col>
            </Row>
            <Row className='mt-5'>
            <Col md={6}>
                    <div className='location-card'>
                    <a className='text-decoration-none' href='https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&z=7&mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&ll=51.470910462064595%2C-0.2021954999999931'> < BsGeoAltFill/> <span className='ms-4 text-capitalize contact-adress' >Totenham road, london, england</span></a>
                    <br/>
                    <br/>
                    <a className='text-decoration-none' href='_'> <BsFillTelephoneFill/> <span className='ms-4 detail' >+123 456789</span></a> <br/> 
                    <br/>
                    <a className='text-decoration-none location-icon' href='_'><BsFillEnvelopeFill/> <span className='ms-4 detail' >information@official.com</span></a><br/>
                    <div className='mt-4'>
                    <a  href='_https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&z=7&mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&ll=51.470910462064595%2C-0.2021954999999931' className=' ps-1 text-capitalize text-decoration-none contact-learn '> Find us on map<span className='contact-arrow ms-5'>&rarr;</span> </a>
                    </div>
                    </div>
                </Col>
                <Col md={6}>
                    <div className='location-card'>
                    <a className='text-decoration-none' href='https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&z=7&mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&ll=51.470910462064595%2C-0.2021954999999931'> < BsGeoAltFill/> <span className='ms-4 text-capitalize contact-adress' >Totenham road, london, england</span></a>
                    <br/>
                    <br/>
                    <a className='text-decoration-none' href='_'> <BsFillTelephoneFill/> <span className='ms-4 detail' >+123 456789</span></a> <br/> 
                    <br/>
                    <a className='text-decoration-none location-icon' href='_'><BsFillEnvelopeFill/> <span className='ms-4 detail' >information@official.com</span></a><br/>
                    <div className='mt-4'>
                    <a  href='_https://www.google.com/maps/d/u/0/viewer?ie=UTF8&hl=en&msa=0&z=7&mid=14jEeIQ7yyKK7iih9Sl_AjR7jZf0&ll=51.470910462064595%2C-0.2021954999999931' className=' ps-1 text-capitalize text-decoration-none contact-learn '> Find us on map<span className='contact-arrow ms-5'>&rarr;</span> </a>
                    </div>
                    </div>
                </Col>
            </Row>
            
        </Container>

        </>
    )
}