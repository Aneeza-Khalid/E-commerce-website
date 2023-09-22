import { Container, Row, Col } from 'react-bootstrap';
import './ShopDetailMiddle.css';


export default function ShopDetailMiddle(){
    return(
        <>
        <Container className='mt-5 mb-5'>
                <Row>
                    <Col>
                    <div className='p-md-5 card-about-product  me-2 '>
                        <h2 className='text-capitalize mt-3 '>
                            about product
                        </h2>
                        <p className='mt-4'>
                        One of the standout features of the Drone Ultra is its powerful camera system. Equipped with a high-resolution 4K camera, it allows photographers and videographers to capture crystal-clear images and videos with exceptional detail. The camera is mounted on a 3-axis gimbal, providing superior stabilization and ensuring smooth footage even in windy conditions or during high-speed maneuvers.
                        </p>
                        <p className='mt-3'>
                        The Drone Ultra boasts an impressive flight performance, thanks to its advanced flight control system and powerful motors. It offers precise and responsive controls, allowing pilots to navigate through tight spaces and execute complex flight maneuvers with ease. The drone can achieve impressive speeds and has a considerable flight range, enabling it to cover large areas during a single flight session.
                        </p>
                    </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}