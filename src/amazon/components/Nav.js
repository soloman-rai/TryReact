import React from 'react';
import { Link } from "react-router-dom";

import '../assets/Nav.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from '../context/StateProvider';
import { auth } from '../firebase';


function Nav() {
    const [{ basket, user }] = useStateValue();

    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="nav">
            <Link to="/">
                <img className="nav_logo"
                    src="https://upload.wikimedia.org/wikipedia/donate/f/fd/Amazon-logo-white.svg" alt="Amazon Logo" />
            </Link>

            <div className="nav_search">
                <input type="text" className="nav_searchInput" />
                <SearchIcon className="nav_searchIcon" />
            </div>

            <div className="nav_header">
                <Link to={!user ? "/login" : ''} className="header_link">
                    <div onClick={handleAuth} className="header_option">
                        <span className="header_optionOne"> {user && `Hello, ${user.email}`}</span>
                        <span className="header_optionTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionOne">Returns</span>
                        <span className="header_optionTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_optionOne">Your</span>
                        <span className="header_optionTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout">
                    <div className="header_optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header_optionTwo header_optionBasketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>
    )
}

export default Nav
