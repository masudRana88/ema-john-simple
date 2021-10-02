import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
    return (
        <div>
            <nav>
                 <Link to="/shop">Shop</Link>
                 <Link to="/order">Order Review</Link>
                 <Link to="/inventory">Manage Inventory</Link>
            </nav>
        </div>
    );
};

export default NavBar;