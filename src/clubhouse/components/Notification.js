import React from 'react';

import styled from 'styled-components';
import { FcClock } from 'react-icons/fc';

const Notification = ({ img_url, content, time }) => {
    return (
        <Container>
            <NotifImg src={img_url} alt="" />
            <NotifContent>
                {content}
            </NotifContent>
            <NotifTime>
                <FcClock /> {time}
            </NotifTime>
        </Container>
    )
}

export default Notification


const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    // justify-content: center;
    margin-bottom: 2em;

    @media (max-width: 768px){
        margin-bottom: 1em;
    }
`

const NotifImg = styled.img`
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 10%;
    margin-right: 2em;

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
        margin-right: 0.9em;
    }
`

const NotifContent = styled.div`
    flex: 1;

    @media (min-width: 768px) {
        font-size: 20px;
    }
`

const NotifTime = styled.span`
    color: lightgray;
`