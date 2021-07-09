import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { BackI } from './Profile';
import { NextI } from './PhoneConfirm';


const GetUsername = () => {
    return (
        <>
            <Container>
                <Head className="text-right mb-0">
                    <Link to='/'>
                        <BackI />
                    </Link>
                </Head>
                <Body>
                    <p>Pick a Username</p>
                    <UsernameInput type="text" placeholder="" required />
                </Body>
                <Footer>
                    <Link to="/invite" className="primaryBtn d-flex items-center">
                        Reserve Username <NextI />
                    </Link>
                </Footer>
            </Container>
        </>
    )
}

export default GetUsername


const Container = styled.div`
    padding: 1em;
    height: 100%;
    width: 100%;
`

const Head = styled.div`
    left: 0;
    right: 0;
    top: 0;
    height: 10vh;
`

const Body = styled.div`
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    p {
        font-weight: 500;
        font-size: 1.3em;
    }

    @media (min-width: 768px) {
        p {
            font-size: 2em;
        }
    }
`

const UsernameInput = styled.input`
    margin-top: 2em;
    border: none;
    outline: transparent;
    shadow: none;
    text-align: center;
    border-radius: 0.5em;
    padding: 10px;
    width: 80%;

    @media (min-width: 768px) {
        width: 50%;
        padding: 1em 10px;
        border-radius: 0.8em;
    }
`

const Footer = styled(Body)`
    a {
        bottom: 0;
    }

    @media (max-width: 768px) {
        a {
            border-radius: 1.2em;
            padding: 0.5em 1em;
            font-size: 1em;
        }
    }
`
