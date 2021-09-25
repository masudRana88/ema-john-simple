import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const { name, price, img, stock, seller, star} = props.product
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
                <Rating 
                    readonly
                    initialRating={star}
                    emptySymbol="far fa-star star-icon"
                    fullSymbol="fas fa-star star-icon"
                ></Rating>
                <br/>
                <button onClick={()=> props.addToCart(props.product)} className="btn-reguler">{cartIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;