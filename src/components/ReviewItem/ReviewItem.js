import React from 'react';

const ReviewItem = (props) => {
    const { name, price, quantity, img , key} = props.products;
    const { handelRemove } = props.handelRemove;
    return (
      <div className='product'>
        <div>
            <img src={img} alt="" />        
        </div>
        <div>
          <h4 className='prodict-name'>{name}</h4>
          <p className='price'>Price: {price}</p>
          <p>Quantity: {quantity}</p>
          <button className='btn-reguler' onClick={()=> props.handelRemove(key)}>Remove</button>
        </div>
      </div>
    );
};

export default ReviewItem;