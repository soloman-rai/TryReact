import React from 'react'

import styled from 'styled-components';


const Login = () => {
    return (
        <Container>
            <CTA>
                <LogoOne src="/disney/images/cta-logo-one.svg" alt="Logo One" />

                <SignUpButton>
                    Get All There
                </SignUpButton>

                <Description>
                    Provident similique accusantium nemo autem. Veritatis
                    obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                    nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                    tenetur error, harum nesciunt ipsum debitis quas aliquid.
                </Description>

                <LogoTwo src="/disney/images/cta-logo-two.png" alt="Logo Two" />
            </CTA>
        </Container>
    )
}

export default Login


const Container = styled.div`
    position: relative;
    height: calc(100vh - 17px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before {
        background-image: url('/disney/images/login-background.jpg');
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        opacity: 0.7;
    }
`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;

    @media (max-width: 768px) {
        @media (max-width: 768px) {
            margin-top: 0;
            width: 96%;
        }
    }
`


const LogoOne = styled.img`
`


const SignUpButton = styled.a`
    text-transform: uppercase;
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition; all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background-color: #0483ee;
    }

    @media (max-width: 768px) {
        padding: 10px 0;
        font-size: 13px;
        letter-spacing: 1.3px;
    }
`


const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`


const LogoTwo = styled.img`
    width: 90%;
`