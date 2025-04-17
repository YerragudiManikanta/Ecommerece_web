
// src/components/CategoryFilter.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategory } from '../store/productsSlice';

const CategoryFilter = () => {
    const dispatch = useDispatch();

    const handleCategoryChange = (event) => {
        dispatch(setCategory(event.target.value));
    };

    return (
        <select onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            <option value="electronics">Electronics</option>
            <option value="jewelry">Jewelry</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
        </select>
    );
};

export default CategoryFilter;