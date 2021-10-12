import React from 'react';
import cartDetails from '../../Hooks/cartDetails';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props
    const [total, totalQuantity] = cartDetails(cart)
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
            {props.children}
        </div>
    );
};
export default Cart;