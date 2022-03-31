import React from 'react';
import "./Cart.css";



const Cart = (props) => {
    const {cart} =props;
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Selected Item : {cart.length}</p>
        </div>
    );
};

export default Cart;