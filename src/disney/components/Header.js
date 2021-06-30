import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { setUserLogin, selectUser, setUserSignOut } from '../features/user/userSlice';
import { auth, provider } from '../firebase';
import { useHistory } from 'react-router-dom';


const Header = () => {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    const history = useHistory();

    // Preserve the logged in user upon page refresh
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL
                }))
                history.push('/');
            }
        })
    }, [])

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                // console.log(result);
                const user = result.user;
                dispatch(setUserLogin({
                    name: user.displayName,
                    email: user.email,
                    image: user.photoURL
                }))
                history.push("/");
        })
    }

    const signOut = () => {
        auth.signOut()
            .then(() => {
                dispatch(setUserSignOut());
                history.push("/login");
        })
    }

    return (
        <Nav>
            <Link to='/'>
                <Logo src="/disney/images/logo.svg" alt="Disney Logo" />
            </Link>
            <NavMenu>
                <a href="">
                    <img src="/disney/images/home-icon.svg" alt="Home SVG" />
                    <span>Home</span>
                </a>

                <a href="">
                    <img src="/disney/images/search-icon.svg" alt="Home SVG" />
                    <span>Search</span>
                </a>

                <a href="">
                    <img src="/disney/images/watchlist-icon.svg" alt="Home SVG" />
                    <span>Watchlist</span>
                </a>

                <a href="">
                    <img src="/disney/images/original-icon.svg" alt="Home SVG" />
                    <span>Originals</span>
                </a>

                <a href="">
                    <img src="/disney/images/movie-icon.svg" alt="Home SVG" />
                    <span>Movies</span>
                </a>

                <a href="">
                    <img src="/disney/images/series-icon.svg" alt="Home SVG" />
                    <span>Series</span>
                </a>
            </NavMenu>

            <UserImage>
                {user?.is_authenticated ?
                    <Avatar src={user.image} onClick={signOut} />
                    :
                    <Login onClick={signIn}>Login</Login>
                }
            </UserImage>
        </Nav>
    )
}

export default Header


const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 20px;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img {
            height: 20px;
        }

        span {
            font-size: 13px;
            letter-spacing: 1.3px;
            text-transform: uppercase;
            position: relative;

            // add an element after
            &:after {
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transfrom-origin: left center;
                transform: scaleX(0);   // going to scale the div to 0 ( on a scale of 0 to 1)
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }

        @media (max-width: 768px) {
            display: none;
        }
       
    }
`

const UserImage = styled.div`
    cursor: pointer;
`

const Login = styled.div`
    border: 1px solid #f9f9f9;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0,6);
    transition: all 0.2s ease 0s;
    cursor: pointer;
    
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }

    @media (max-width: 768px) {
        padding: 5px 12px;
        letter-spacing: 1.2px;
    }
`