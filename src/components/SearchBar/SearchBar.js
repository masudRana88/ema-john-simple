import React from 'react';
import cartDetails from '../../Hooks/cartDetails';
import useCards from '../../Hooks/useCards';
import useProduct from '../../Hooks/useProducts';
import Cart from '../Cart/Cart';
import './SearchBar.css'
const SearchBar = (props) => {
    const { searchProduct } = props;
    const [products] = useProduct();
    const [cart] = useCards(products);
    const [total, totalQuantity] = cartDetails(cart)

    return (
        <div className="SearchBar">
            <input className="searchInpute" onChange={searchProduct} placeholder="type here to search" type="text" />
            
            <span >{totalQuantity}</span>
        </div>
    );
};

export default SearchBar;