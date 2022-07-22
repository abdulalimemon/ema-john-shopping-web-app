import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./ReviewItem.css";
const ReviewItem = (props) => {
    const {product, handleRemoveProduct} = props;
    const { name, price, quantity, shipping, img } = product;
    return (
        <div className="review-item">
            <div>
                <img src={img} alt="Product" />
            </div>
            <div className="review-item-detail">
                <div className="item">
                    <p className="product-name" title={name}>{name.length > 20 ? name.slice(0, 20) : name + "..."} </p>
                    <p>Price : <span className="orange">${price}</span></p>
                    <p><small>Shipping : ${shipping}</small></p>
                    <p><small>Quantity : {quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(product)} className="delete-btn"><FontAwesomeIcon icon={faTrashAlt} className="delete-icon"></FontAwesomeIcon ></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;