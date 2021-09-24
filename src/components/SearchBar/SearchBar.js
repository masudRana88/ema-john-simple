import React from 'react';
import './SearchBar.css'
const SearchBar = (props) => {
    const {searchProduct} = props;
    return (
        <div className="SearchBar">
            <input className="searchInpute" onChange={searchProduct} placeholder="type here to search" type="text" />
            
            <span>0</span>
        </div>
    );
};

export default SearchBar;