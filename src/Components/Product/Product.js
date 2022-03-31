import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';


const Product = (props) => {
    const {product, addToCart} = props;
    const { id, category, name, seller, price, stock, ratings, img, ratingsCount, shipping, quantity } = product;
    
    return (
        <div className="container">
            <div className="upper-cart">
                <div className="image">
                    <img src={img} alt="Product" />
                </div>
                <div className="titles">
                    <div className="title">
                        <h3>{name}</h3>
                        <h5>Price: ${price}</h5>
                    </div>
                </div>
                <div className="product-info">
                    <h5>Manufacturer : {seller}</h5>
                    <h5>Rating : {ratings}</h5>
                </div>
            </div>
            <div className="product-btn">
                <button onClick={() => addToCart(product)} className="btn">Add to Cart <span className="btn-icon"> <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></span></button>
            </div>
        </div>
    );
};

export default Product;