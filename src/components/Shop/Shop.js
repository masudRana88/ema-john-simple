import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCards from '../../Hooks/useCards';
import useProducts from '../../Hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import SearchBar from '../SearchBar/SearchBar';
import './Shop.css'

const Shop = () => {
  // get all product
    const [products, setProducts] = useProducts();
  // get localStorage data data
    const [cart, setCart] = useCards(products);
    const [displaySearch, setDinsplaySearch] = useState([]);
    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setDinsplaySearch(data))
    },[])
    // cart btn handale
    const addToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key)
      }
      
      // search product
    const searchProduct = event =>{
        console.log(event.target.value);
        const searchText = event.target.value;
        const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        console.log(matchProduct.length);
        setDinsplaySearch(matchProduct);
     }
    return (
        <div>
          <SearchBar searchProduct={searchProduct} cart={cart}></SearchBar>
          <div className="shop-contsiner">
            <div className="products">
              {
                  displaySearch.map(product => <Product
                    key={product.key}
                    product={product}
                    addToCart={addToCart}
                    ></Product>)
              }
            </div>  
            <div className="card-container">
              <Cart cart={cart}>
                <Link to="order"><button className="btn-reguler card-btn">Review your order</button></Link>
              </Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;