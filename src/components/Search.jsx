
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../store/productsSlice';
import './SearchFilter.css';

const Search = () => {
    const dispatch = useDispatch();

    const handleSearchChange = (event) => {
        dispatch(setSearchTerm(event.target.value));
    };

    return (
        <input 
            type="text" 
            placeholder="Search products..." 
            onChange={handleSearchChange} 
        />
    );
};

export default Search;