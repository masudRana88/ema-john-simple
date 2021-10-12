import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';
import './NavBar.css'
const NavBar = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav>
                 <Link to="/shop">Shop</Link>
                 <Link to="/order">Order Review</Link>
                 <Link to="/inventory">Manage Inventory</Link>
                <Link to="/regester">Sing up</Link>
                {user.email && <span style={{'color' : "wheat"}}>{ user.displayName}</span>}
                {user.email ?  <button onClick={logOut}>Log out</button> : <Link to="/login">Login</Link>}
            </nav>
        </div>
    );
};

export default NavBar;