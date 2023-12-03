import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    // option-1
    // const cart = props.cart;
    // option-2 
    // const {cart} = props;
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }

    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge: ${} </p>
            <p>Tax: ${}</p>
            <h6>Grand Total: {}</h6>
        </div>
    );
};

export default Cart;