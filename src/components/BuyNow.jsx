import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './BuyNow.css'

const BuyNow = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.async = true;
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script); // Clean up
        };
      }, []);

  const loadRazorpay = () => {
    if (cartItems.length === 0) {
      toast.error('Cart is empty!');
      return;
    }

  

    const options = {
      key: process.env.REACT_APP_RAZORPAY_API_KEY, // Use from .env
      amount: totalAmount * 100, // In paisa
      currency: 'INR',
      name: 'My Shop',
      description: 'Checkout Payment',
      image: 'https://yourdomain.com/logo.png', // Optional logo
      handler: function (response) {
        toast.success(`✅ Payment successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Your Name',
        email: 'youremail@example.com',
        contact: '9999999999'
      },
      notes: {
        purpose: 'Product Purchase'
      },
      theme: {
        color: '#3399cc'
      }
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="buynow-container" style={{ padding: '20px' }}>
      <ToastContainer position="top-right" autoClose={3000} />
      <h2>🛒 Order Summary</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.title} - ₹{item.price} × {item.quantity || 1}
              </li>
            ))}
          </ul>

          <h3>Total: ₹{totalAmount.toFixed(2)}</h3>

          <button onClick={loadRazorpay} className="pay-button" style={{
            padding: '10px 20px',
            backgroundColor: '#3399cc',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '10px'
          }}>
            Pay with Razorpay
          </button>
        </>
      )}
    </div>
  );
};

export default BuyNow;
