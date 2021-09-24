import React from 'react';
import logo from '../../images/logo.png'
import NavBar from '../NavBar/NavBar';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <NavBar></NavBar>
        </div>
    );
};

export default Header;