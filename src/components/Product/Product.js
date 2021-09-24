import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name, price, img, stock, seller} = props.product
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4 className="prodict-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p className="price">Price : ${price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={()=> props.addToCart(props.product)} className="btn-reguler">{cartIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;