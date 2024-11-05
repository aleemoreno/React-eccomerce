// src/components/ItemDetail.jsx
import React, { useState } from 'react';
import "./ItemDetail.css";

const ItemDetail = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="item-detail">
            <img src={product.img} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Precio:{product.price}</p>

            <div className="quantity-controls">
                <button onClick={handleDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrease}>+</button>
            </div>

            <button className="add-to-cart-btn">Agregar al carrito</button>
        </div>
    );
};

export default ItemDetail;