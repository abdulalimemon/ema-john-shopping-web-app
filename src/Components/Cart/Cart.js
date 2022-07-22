import React from 'react';
import "./Cart.css";



const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let shipping = 0;

    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping;
    };

    const tax = (total * 0.1).toFixed(2);
    const newTax = parseFloat(tax);





    return (
        <div className="cart">
            <h2>Order Summary</h2>
            <p>Selected Item : {cart.length}</p>
            <p>Total Price : ${total}</p>
            <p>Total Shipping : ${shipping}</p>
            <p>Tax : {newTax}</p>
            <p>Grand Total : {total + shipping + newTax}</p>
            {
                props.children
            }
        </div>
    );
};

export default Cart;