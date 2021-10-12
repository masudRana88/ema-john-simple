import React from 'react';
import { useHistory } from 'react-router'
import useCards from '../../Hooks/useCards';
import useProduct from '../../Hooks/useProducts';
import { clearTheCart, deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCards(products);
    const history = useHistory();
  // handale remove product btn
    const handelRemove = key => {
      const newCart = cart.filter(product => product.key !== key);
      setCart(newCart)
      deleteFromDb(key)
  }
  const handelProsiedToShipping = () => {
    history.push('/shiping');
    setCart([])
    clearTheCart()
    }
    return (
      <div className='shop-contsiner'>
        <div className='products'>
          {cart.map((product) => (
            <ReviewItem
              handelRemove={handelRemove}
              key={product.key}
              products={product}
            />
          ))}
        </div>
        <div className='card-container'>
          <Cart cart={cart}>
            <button onClick={handelProsiedToShipping} className="btn-reguler card-btn">Prosied to Shipping</button>
          </Cart>
        </div>
      </div>
    );
};

export default OrderReview;