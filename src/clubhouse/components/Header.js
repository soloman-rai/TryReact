import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ContactMailRoundedIcon from '@material-ui/icons/ContactMailRounded';
import TodayRoundedIcon from '@material-ui/icons/TodayRounded';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';

const Header = () => {
    return (
        <Container>
            <Link to="/explore">
                <SearchI fontSize="large" />
            </Link>
            <NavItems>
                <Link to="/friends_invite">
                    <InviteI fontSize="large" />
                </Link>
                <Link to="/upcoming">
                    <CalendarI fontSize="large" />
                </Link>
                <Link to="/activity">
                    <NotificationI fontSize="large" />
                </Link>
                <Link to="/profile">
                    <Avatar src="https://images.unsplash.com/photo-1624431776357-e0fc5d4ed301?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=808&q=80" alt="User Profile Image" />
                </Link>
            </NavItems>
        </Container>
    )
}

export default Header

const Container = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    padding: 0.5em 1em;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #f2f0e4;
    z-index: 1;
`

const SearchI = styled(SearchIcon)`
    @media (max-width: 768px) {
        font-size: 1.8em !important;
    }
`

const NavItems = styled.div`
    display: flex;
    align-items: center;

    .MuiSvgIcon-fontSizeLarge, img {
        margin: 0 0.5em;
    }
    
    @media (max-width: 768px) {
        svg {
            font-size: 1.8em !important;
        }
    }
`

const InviteI = styled(ContactMailRoundedIcon)``

const CalendarI = styled(TodayRoundedIcon)``

const NotificationI = styled(NotificationsActiveIcon)``

const Avatar = styled.img`
    width: 33px;
    height: 33px;
    object-fit: cover;
    border-radius: 50%;
`