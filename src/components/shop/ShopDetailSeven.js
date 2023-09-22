import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Navigation from '../home/Nav';
import './ShopDetailOne.css';
import Carousel from 'react-bootstrap/Carousel';
import { BsStarFill, BsStar } from 'react-icons/bs';
import ShopDetailMiddle from './ShopDetailMiddle';
import ShopDetailBottom from './ShopDetailBottom';
import ShoppingCart from './ShoppingCart';

export default function ShopDetailSeven() {
  // State variables to manage the cart modal, cart items, and quantity
  const [showCartModal, setShowCartModal] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  // Function to show the cart modal
  const handleCartModalShow = () => {
    setShowCartModal(true);
  };

  // Function to close the cart modal
  const handleCartModalClose = () => {
    setShowCartModal(false);
  };

  // Function to add a product to the cart
  const handleAddToCart = () => {
    // Check if the product is already in the cart
    const existingItemIndex = cartItems.findIndex(item => item.name === 'Drone Transmitter System');
    if (existingItemIndex !== -1) {
      // If the product is already in the cart, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += parseInt(quantity, 10); // Parse quantity to ensure it's a number
      setCartItems(updatedCartItems);
    } else {
      // If the product is not in the cart, add it as a new item
      const newItem = {
        id: cartItems.length + 1,
        name: 'Drone Transmitter System',
        price: 599.0,
        quantity: parseInt(quantity), // Parse quantity to ensure it's a number
        imageUrl: "https://i.ibb.co/8dN7V58/7th.jpg",
      };
      setCartItems([...cartItems, newItem]);
    }
    // Reset the quantity to 1 after adding/updating the product
    setQuantity(1);
    // Open the cart modal after adding/updating the product
    handleCartModalShow();
  };

  // Function to remove a product from the cart
  const handleRemoveFromCart = (itemId) => {
    // Filter out the item with the given ID to remove it from the cart
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  // Function to calculate the subtotal of items in the cart
  const calculateSubtotal = () => {
    // Use the reduce function to calculate the total price of items in the cart
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <>
      <Container fluid className='bg-color pt-2 pb-5'>
        <Navigation />
        <Container className='mt-5 pb-5'>
          <Row>
            <Col md={6}>
              <div className='w-100'>
                <Carousel
                  autoplay={false}
                  slide={true}
                  pause="hover"
                  indicators={false}
                  interval={null}
                >
                  <Carousel.Item className='w-100'>
                    <img
                      className="d-block w-100"
                      src="https://i.ibb.co/8dN7V58/7th.jpg"
                      alt="First slide"
                      width="800"
                      height="400"
                    />
                  </Carousel.Item>
                  <Carousel.Item className='w-100'>
                    <img
                      className="d-block w-100"
                      src="https://i.ibb.co/8dN7V58/7th.jpg"
                      alt="Second slide"
                      width="800"
                      height="400"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>
            <Col md={5} className=' ms-md-5 pt-3'>
              <div className='shop-detail-page'>
                <h2 className='text-capitalize'>
                  Drone transmitter system
                </h2>
                <p className='mt-3'>$ 599.00 USD</p>
              </div>
              <div className="star-rating">
                <BsStarFill className="filled-star" />
                <BsStarFill className="filled-star" />
                <BsStarFill className="filled-star" />
                <BsStarFill className="filled-star" />
                <BsStar className="empty-star" />
              </div>
              <div>
                <p className='mt-3 text-white text-lg fw-normal'>
                  Drone Ultra is a state-of-the-art drone designed specifically
                  for professional aerial photography and videography. With its
                  advanced features and cutting-edge technology, this drone
                  offers unparalleled performance and versatility for capturing
                  stunning aerial shots.
                </p>
              </div>
              <Row className='mt-4 '>
                <Col xs={6} className='p-2'>
                  <input
                    type='number'
                    min='1'
                    className='quantity p-1'
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  ></input>
                </Col>
                <Col xs={6}>
                  <Button
                    className='text-capitalize white-btn px-md-4 ms-md-5 py-3 shop-btn'
                    onClick={handleAddToCart}
                  >
                    Add to cart
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <ShopDetailMiddle />
      </Container>
      <ShopDetailBottom />

      {/* Render the ShoppingCart component with the calculated subtotal */}
      <ShoppingCart
        showCartModal={showCartModal}
        handleCartModalClose={handleCartModalClose}
        cartItems={cartItems}
        handleRemoveFromCart={handleRemoveFromCart}
        calculateSubtotal={calculateSubtotal}
      />
    </>
  );
}
