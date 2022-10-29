import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="header logo" />
            <nav>
                <div className="nav-link">
                <a href="/shop">Shop</a>
                <a href="/oder-review">Oder review</a>
                <a href="/manage">Manage inventory</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;