import React from 'react';

import styled from 'styled-components';
import SubHeader from '../components/SubHeader';
import Notification from '../components/Notification';

const Activity = () => {
    return (
        <Container>
            <Header>
                <SubHeader pageTitle="Activity" />
            </Header>
            <Body>
                <Notification
                    img_url="https://images.unsplash.com/photo-1623053434699-01f61369ccff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
                    content="James Shah started to follow you. You have 3 mutual connections."
                    time="1h ago"
                />
                <Notification
                    img_url="https://images.unsplash.com/photo-1628155190558-bb916e76752b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80"
                    content="Sarah Parker scheduled 'Musicians on a Mission' for Monday, August 15 @ 1:00 pm"
                    time="1d ago"
                />
                <Notification
                    img_url="https://images.unsplash.com/photo-1628327977928-c5eb9a2c0687?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
                    content="John pinged you to join 'Talks on Entrepreneurship' with Tom and Jerry yesterday"
                    time="2d ago"
                />
            </Body>
        </Container>
    )
}

export default Activity


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
    padding: 1em;

    @media (max-width: 768px) {
        padding: 0.4em;
    }
`