
import React from "react";
import { Link } from "react-router-dom"; 
import './Item.css';
import "./ItemList.css"

const Itemlist = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.img} alt={product.name} className="product-image" />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">{product.price}</p>
            {/* boton */}
            <Link to={`/product/${product.id}`} className="view-details-button">Ver Detalles</Link>
        </div>
    );
}

export default Itemlist; 