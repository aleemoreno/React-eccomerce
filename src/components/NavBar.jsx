import React from 'react';
import './NavBar.css';
import logo from '../../images/logo.png'; 
import CartWidget from './CartWidget';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();

    const handleSelectCategory = (category) => {
        navigate(`/${category}`);  
    };

    return (
        <header>
            <div className="logo-img">
                <img src={logo} alt="Logo" className='logo-image' /> 
                <div className="cart-container">
                    <CartWidget />
                </div>                                                                                                                                                                                                            
            </div>
            
            <nav className="navbar">
                <ul className="navbar-links">
                    <li className="navbar-item" onClick={() => navigate('/')}>INICIO</li>
                    <li className="navbar-item dropdown">
                        PRODUCTOS
                        <ul className="dropdown-menu">
                            <li className="dropdown-item" onClick={() => handleSelectCategory('cafe')}>Café de Especialidad</li>
                            <li className="dropdown-item" onClick={() => handleSelectCategory('accesorios')}>Accesorios</li>
                            <li className="dropdown-item" onClick={() => handleSelectCategory('cursos')}>Cursos - Escuela de Café</li>
                        </ul>
                    </li>
                    <li className="navbar-item">SOBRE NOSOTROS</li>
                    <li className="navbar-item">CONTÁCTANOS</li>
                </ul>
            </nav> 
            <h2 className="body-title-cards">ELIGE, PAGA Y RECIBE TU PEDIDO SIN MOVERTE DE TU CASA.</h2>
        </header>
    );
}

export default NavBar;