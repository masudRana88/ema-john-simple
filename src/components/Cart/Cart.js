import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props
    let total = 0;
    let totalQuantity = 0;
    for(const product of cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total = total + (product.price * product.quantity);
        totalQuantity = totalQuantity + product.quantity;
    }
   
    return (
        <div>
            <h3 className="cart-heading">Order Summary</h3>
            <h4 className="total-orderd">Items orderd : {totalQuantity}</h4>
            <table>
                <tbody>
                <tr>
                    <td>
                        Items :
                    </td>
                    <td>${total.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>
                        Shipping :
                    </td>
                    <td>$</td>
                </tr>
                <tr>
                    <td>
                        Total before tax :
                    </td>
                    <td>$0</td>
                </tr>
                <tr>
                    <td>
                        Estmated tax :
                    </td>
                    <td>$0</td>
                </tr>
                <tr>
                    <td>
                        Order total :
                    </td>
                    <td>$0</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};
export default Cart;