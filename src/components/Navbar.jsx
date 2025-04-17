import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useSelector } from 'react-redux';
import { FaHome, FaShoppingCart, FaInfoCircle, FaPhoneAlt, FaUser } from 'react-icons/fa'; // Importing various icons

const Navbar = () => {
  const cartItems = useSelector(state => state.cart.items);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">ShopZone</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">
            <FaHome size={20} /> Home
          </Link>
        </li>
        <li>
          <Link to="/products">
            <FaShoppingCart size={20} /> Products
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaInfoCircle size={20} /> About
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <FaPhoneAlt size={20} /> Contact
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <FaUser size={20} /> Profile
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <FaShoppingCart size={20} />
            {/* Display the item count in the cart */}
            {cartItems.length > 0 && (
              <span className="cart-item-count">
                {cartItems.length}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
