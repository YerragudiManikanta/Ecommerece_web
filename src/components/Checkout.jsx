// src/components/Checkout.js

import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const cartItems = useSelector(state => state.cart.items);
    
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    const handleCheckout = () => {
        // Handle the checkout logic here
        alert("Checkout successful!");
    };

    return (
        <div>
            <h2>Checkout</h2>
            {cartItems.length === 0 ? (
                <p>No items in your cart to checkout.</p>
            ) : (
                <>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>{item.title} - ${item.price}</li>
                        ))}
                    </ul>
                    <h3>Total: ${total}</h3>
                    <button onClick={handleCheckout}>Proceed to Checkout</button>
                </>
            )}
        </div>
    );
};

export default Checkout;