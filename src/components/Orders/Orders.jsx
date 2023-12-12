import React from 'react';
import './Orders.css';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData()
    return (
        <div className='shop-container'>
           <div className='products-container'>
            <h3>Orders page</h3>
           </div>
           <div className='cart-container'>
            <Cart cart={[]}></Cart>
           </div>
        </div>
    );
};

export default Orders;