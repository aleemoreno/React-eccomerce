
import React from 'react';
import './NavBar.css';
import '../CartWidget/CartWidget.css'
import logo from '../../../images/logo.png'; 
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <header>
            <div className="logo-img">
                <img src={logo} alt="Logo" className='logo-image' /> <CartWidget/>
            </div>
            <nav className="navbar">
                <ul className="navbar-links">
                    <li className="navbar-item">Inicio</li>
                    <li className="navbar-item">Catálogo</li>
                    <li className="navbar-item">Sobre nosotros</li>
                    <li className="navbar-item">Contáctanos</li>
                </ul>
            </nav> 
        </header>
    );
}

export default NavBar;
