import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, increaseQty, decreaseQty } from '../store/cartSlice';
import './Cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';  // Use useNavigate for navigation

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();  // Initialize useNavigate

  // Function to calculate the total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };

  // Function to handle Buy Now button click
  const handleBuyNowClick = () => {
    // Navigate to Buy Now page
    navigate('/buynow');
  };

  return (
    <div className="cart-container">
      <ToastContainer position="top-right" autoClose={2000} />

      <h2 className="cart-title">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty">No items in the cart</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="item-details">
                  <h3 className="item-title">{item.title}</h3>
                  <p className="item-price">${item.price}</p>
                  <div className="quantity-controls">
                    <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                    <span>{item.quantity || 1}</span>
                    <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                  </div>
                </div>
                <button
                  className="remove-button"
                  onClick={() => {
                    dispatch(removeItem(item.id));
                    toast.info(`${item.title} removed from cart`);
                  }}
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <h3>Total: ${getTotalPrice().toFixed(2)}</h3>
            <button className="buy-button" onClick={handleBuyNowClick}>Buy Now</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
