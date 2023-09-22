import { Container, Row, Col } from 'react-bootstrap';

export default function ShopTechnology(){
    return(
        <>
         <Container className='mt-5 mb-5'>
            <Row>
                <Col lg={3} md={6} xs={12}> {/*first image*/}
                <div className="image-container">
                
                     <img className='hover-image' src="https://i.ibb.co/mb7pk0k/646c624c3b4156dfbf4754c1-drone-photo-medium-p-500.jpg" alt="drone-medium-p-500" border="0" />

                <a href='/ShopDetailOne'><button class="hover-button text-capitalize">detail</button></a>
               </div>
               <div className='product-detail mt-3'>
                <a href='/ShopDetailOne' className='text-decoration-none'><h3 className='text-capitalize drone-name '>Drone ultra</h3></a>
                <p>$ 799.00 USD</p>
               </div>
                </Col>
                {/*second image*/}
                <Col lg={3} md={6} xs={12}> 
                <div className="image-container">
                <img className='hover-image' src="https://i.ibb.co/vddqKvb/2nd-drone.jpg" alt="2nd-drone" border="0" />
                <a href='/ShopDetailTwo'><button class="hover-button text-capitalize">detail</button></a>
               </div>
               <div className='product-detail mt-3'>
                <a href='/ShopDetailTwo' className='text-decoration-none'><h3 className='text-capitalize drone-name'>Drone ultra light</h3></a>
                <p>$ 599.00 USD</p>
               </div>
                </Col>

                {/*third image*/}
                <Col lg={3} md={6} xs={12}>
                <div className="image-container">
                
                <img className='hover-image' src="https://i.ibb.co/GPs62vb/3rd.jpg" alt="3rd" border="0" />
                
                <a href='/ShopDetailThree'><button class="hover-button text-capitalize">detail</button></a>
               </div>
               <div className='product-detail mt-3'>
                <a href='/ShopDetailThree' className='text-decoration-none'><h3 className='text-capitalize drone-name '>Drone with reciever</h3></a>
                <p>$ 299.00 USD</p>
               </div>
                </Col>

                {/*fourth image*/}
                <Col lg={3} md={6} xs={12}>
                <div className="image-container">
                <img className='hover-image' src="https://i.ibb.co/NCwgR0N/4th.jpg" alt="4th" border="0" />
                <a href='/ShopDetailFour'><button class="hover-button text-capitalize">detail</button></a>
               </div>
               <div className='product-detail mt-3'>
                <a href='/ShopDetailFour' className='text-decoration-none'><h3 className='text-capitalize drone-name '> standard Drone </h3></a>
                <p>$ 499.00 USD</p>
               </div>
                </Col>
            </Row>
            <Row className='mt-4'>

                {/*fifth image*/}
                <Col lg={3} md={6} xs={12}>
                <div className="image-container">
                <img className='hover-image' src="https://i.ibb.co/5MTdNfM/5th.jpg" alt="5th" border="0" />
                <a href='/ShopDetailFive'><button class="hover-button text-capitalize">detail</button></a>
               </div>

               <div className='product-detail mt-3'>
                <a href='/ShopDetailFive' className='text-decoration-none'><h3 className='text-capitalize drone-name '>Drone 3 pro plus</h3></a>
                <p>$ 599.00 USD</p>
               </div>
                </Col>

                {/*sixth image*/}
                <Col lg={3} md={6} xs={12}>
                <div className="image-container">
                <img className='hover-image' src="https://i.ibb.co/GHwgMXp/6th.jpg" alt="6th" border="0" />
                <a href='/ShopDetailSix'><button class="hover-button text-capitalize">detail</button></a>
               </div>
               <div className='product-detail mt-3'>
                <a href='/ShopDetailSix' className='text-decoration-none'><h3 className='text-capitalize drone-name '>Drone 4 pro plus</h3></a>
                <p>$ 799.00 USD</p>
               </div>
                </Col>
            </Row>
        </Container>
        </>
    )
}