import React from "react";
import './Productcard.css';

const Productcard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.img} alt={product.name} className = "product-image"/>
            <h3 className = "product-name"> {product.name}</h3>
            <p className = "product-price">{product.price}</p>
            <button className = "add-to-cart">Agregar al Carrito</button>
        </div>
    )
}

export default ProductCard;