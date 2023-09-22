import React from 'react';
import { Modal, Row, Col, Button } from 'react-bootstrap';
import './CartModal.css';

function ShoppingCart({
  showCartModal,
  handleCartModalClose,
  cartItems,
  handleRemoveFromCart,
  calculateSubtotal,
}) {
  return (
    <Modal show={showCartModal} onHide={handleCartModalClose} className='d-flex flex-column justify-content-center align-items-center'>
      <Modal.Header closeButton className='bg-white'>
        <Modal.Title className='text-black text-lg fw-bold'>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body className='bg-white'>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <Row>
                <Col xs={{ span: '3', offset: '0' }}>
                  <img
                    src={item.imageUrl}
                    alt="Product"
                    width="100%"
                  />
                </Col>
                <Col xs={{ span: '5', offset: '0' }} className='cart-detail'>
                  <h3>{item.name}</h3>
                  <p> ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <Button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className='text-capitalize white-btn'
                  >
                    Remove
                  </Button>
                </Col>
              </Row>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </Modal.Body>
      <Modal.Footer className='bg-white footer'>
        <p>Subtotal: ${calculateSubtotal().toFixed(2)}</p>
        <Button className='text-capitalize' style={{ display: 'block' }}>continue to checkout</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ShoppingCart;
