import React from 'react';
import cart from '../assets/cart.svg';
import './CartWidget.css';
import { cartContext } from '../context/cartContext'
import { useContext } from 'react';
import { Link } from 'react-router-dom' 

const CartWidget = () => {
  const { totalItems } = useContext(cartContext); // Obtén el número total de productos del contexto

  return (
    <Link to="/cart" className="Cartwidget-link">
      <div className="Cartwidget-icon">
        <img className="Cartwidget-img" src={cart} alt="cart-widget" />
        {totalItems > 0 && <span className="Cartwidget-count">{totalItems}</span>} {/* Muestra el número solo si hay productos */}
      </div>
    </Link>
  );
};

export default CartWidget;