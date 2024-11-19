import React from 'react';
import "./ItemDetail.css";
import ItemCount from './ItemCount';

function ItemDetail({ product }) {
  if (!product) {
    return <p>Cargando detalles del producto...</p>;  // O cualquier otro mensaje que prefieras
  }
  
  return (
    <div className="item-detail">
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      <ItemCount product={product} />
    </div>
  );
}

export default ItemDetail;
