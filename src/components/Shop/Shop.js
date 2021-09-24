import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import SearchBar from '../SearchBar/SearchBar';
import './Shop.css'

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [displaySearch, setDinsplaySearch] = useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data=>{
           setProduct(data)
           setDinsplaySearch(data)
          })
    },[])
    // cart btn handale
    const addToCart = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.key)
      }
      // get local storage data
      useEffect(()=>{
        const saveCart = getStoredCart();
        if(products.length){
          const storedCard = [];
          for(const key in saveCart){
            const saveProudct = products.find(product => product.key === key);
            if(saveProudct){
              const quantity = saveCart[key];
              saveProudct.quantity = quantity;
              storedCard.push(saveProudct);
            }
          }
          setCart(storedCard)
        }
      },[products])
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
          <SearchBar searchProduct={searchProduct}></SearchBar>
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
             <Cart cart={cart}></Cart>
          </div>
        </div>
        </div>
    );
};

export default Shop;