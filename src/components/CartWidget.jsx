import React from 'react';
import cart from '../assets/cart.svg';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className = "Cartwidget-icon">
      <img className = "Cartwidget-img" src={cart} alt="cart-widget"/>
       0    
    </div>
  );
};

export default CartWidget;
