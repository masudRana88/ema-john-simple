import React from 'react';
import useCards from '../../Hooks/useCards';
import useProduct from '../../Hooks/useProducts';
import { deleteFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCards(products);
  // handale remove product btn
    const handelRemove = key => {
      const newCart = cart.filter(product => product.key !== key);
      setCart(newCart)
      deleteFromDb(key)
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
          <Cart cart={cart}></Cart>
        </div>
      </div>
    );
};

export default OrderReview;