import React from 'react'

import styled from 'styled-components';
import SubHeader from '../components/SubHeader';
import Event from '../components/Event';


const Upcoming = () => {
    return (
        <Container>
            <Header>
                <SubHeader pageTitle="Upcoming For You" />
            </Header>
            <Body>
                <DayTitle>Today</DayTitle>
                <Event />
                <Event />
                <Event />
            </Body>
        </Container>
    )
}

export default Upcoming


const Container = styled.div`
    padding: 0 0.5em;
    height: 100%;
    overflow: auto;
    padding-top: 5.2em;
`

const Header = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    background-color: #f2f0e4;
    z-index: 5;
    padding: 0.5em;  
`

const Body = styled.div`
    padding: 1.5em 2em;

    @media (max-width: 768px) {
        padding: 0.5em 0.8em;
    }
`

const DayTitle = styled.div`
    text-transform: uppercase;
    font-weight: 500px;
    background: linear-gradient(to right, #e6e6e6, #d2d0d0);
    padding: 0.15em;
    // position: fixed;
    // width: 100%;
    // z-index: 1;
    
    @media (min-width: 768px) {
        font-size: 25px;
        padding: 0.25em;
    }
`