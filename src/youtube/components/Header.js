import React, { useState } from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import '../assets/Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [searchInput, setSearchInput] = useState('');

    return (
        <div className="header">
            <div className="header_left">
                <MenuIcon classname="header_left_icon" />
                <Link to='/'>
                    <img
                        className="header_logo"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/YouTube_Logo_%282013-2017%29.svg/2560px-YouTube_Logo_%282013-2017%29.svg.png"
                    alt="Youtube Logo" />
                </Link>
            </div>
            <div className="header_input">
                <input value={searchInput} placeholder="Search" type="text" onChange={e => setSearchInput(e.target.value)} />
               <Link to={`/search/${searchInput}`}>
                    <SearchIcon className="header_inputBtn" />
                </Link>
            </div>  
            <div className="header_right">
                <VideoCallIcon className="header_icons" />
                <AppsIcon className="header_icons" />
                <NotificationsIcon className="header_icons" />
                <Avatar alt="James Jones"
                        src="https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528" />
            </div>
        </div>
    )
}

export default Header
