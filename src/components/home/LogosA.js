import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Logos.css';

export default function Logos(){
    return(
        <>
        <section >{/*brands logo*/}
    <Container className='mt-4 mb-2' >
        <Row >
            <Col md={3} xs={6} className='mt-3 pb-0 pt-0 ps-3 pe-0 '>
            <div className='image-zen'>
            <img src="https://assets.website-files.com/6450b31696e25f8aa6cdd7b0/645399b0e735de3aff3db736_zendesk%20logo%20.svg" alt="zendesk" border="0" />
            </div>
            </Col>
            <Col md={3} xs={6} className='mt-4 pb-0 pt-0 ps-3 pe-0' >
            <div className='image-zen'>
            <img src="https://assets.website-files.com/6450b31696e25f8aa6cdd7b0/645399d5fed057118130abfe_bitbucket%20logo%20.svg" alt="useberry" border="0" />
            </div>
            </Col>
            <Col md={3} xs={6} className='mt-3 pb-0 pt-0 ps-3 pe-0' >
                <div className='image-zen'>
                <img src="https://assets.website-files.com/6450b31696e25f8aa6cdd7b0/645399f845747b304ae140ce_bubble%20logo.svg" alt="circle" border="0"/>
                </div>

            </Col>
            <Col md={3} xs={6} className='mt-3 pb-0 pt-0 ps-5 pe-0 '>
                <div className='image-zen '>
                <img src="https://assets.website-files.com/6450b31696e25f8aa6cdd7b0/64539a16a79e9d029b41e481_useberry%20logo%20.svg" alt="circle" border="0"/>
                </div>
            </Col>
        </Row>
    </Container>
</section>
</>
    )
}