import React from 'react';
import cartDetails from '../../Hooks/cartDetails';
import './SearchBar.css'
const SearchBar = (props) => {
    
    const {cart, searchProduct} = props
    const [total, totalQuantity] = cartDetails(cart)
    return (
        <div className="SearchBar">
            <input className="searchInpute" onChange={searchProduct} placeholder="type here to search" type="text" />
            
            <span >{totalQuantity}</span>
        </div>
    );
};

export default SearchBar;