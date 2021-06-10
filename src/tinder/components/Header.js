import React from 'react';

import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { IconButton } from '@material-ui/core';
import '../assets/Header.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../context/StateProvider';


function Header({ backButton, profileButton }) {
    const [{user}, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to={backButton ? `${backButton}` : profileButton ? '/profile' : ''}>
                <IconButton>
                    {!backButton ?
                        <PersonIcon className="header_icon" fontSize="large" />
                        :
                        <ArrowBackIosIcon className="header_icon" fontSize="large" />
                    }
                </IconButton>
            </Link>
            <Link to='/'>
                <img className="header_logo" src="https://cdn.worldvectorlogo.com/logos/tinder-1.svg" alt="Tinder Logo" />
            </Link>
            <Link to='/chat'>
                <IconButton>
                    <ForumIcon className="header_icon" fontSize="large" />
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
