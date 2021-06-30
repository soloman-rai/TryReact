import React from 'react'

import styled from 'styled-components';
import { loginUrl } from '../spotify';

const Login = () => {
    return (
        <Container className="login">
            <Logo src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_White.png" alt="Spotify White Logo" />

            <Link href={loginUrl}>Login with Spotify</Link>
        </Container>
    )
}

export default Login


const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
`

const Logo = styled.img`
    height: 200px;
    // width: 100%;
    object-fit: cover;

    @media (max-width: 768px) {
        height: 80px;
    }
`

const Link = styled.a`
    padding: 20px;
    border-radius: 99px;
    background: #1db954;
    font-weight: 800;
    color: white;
    text-decoration: none;
`