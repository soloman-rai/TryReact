import React from 'react';

import styled from 'styled-components';
import { IoIosNotificationsOutline } from 'react-icons/io';

const Event = () => {
    return (
        <Container>
            <Head>
                <TitleTime>
                    <p>3:00 pm</p>
                    <span>Sacred Cypher Sundays</span>
                </TitleTime>
                <NotificationI />
            </Head>
            <Participants>
                <ParticipantImg src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="" />
                <ParticipantImg src="https://images.unsplash.com/photo-1628092653619-fb7ceb8ec076?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=612&q=80" alt="" />
                <ParticipantImg src="https://images.unsplash.com/photo-1622262677462-e0b3400839ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="" />
                <ParticipantImg src="https://images.unsplash.com/photo-1615717218636-61afe807192d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=716&q=80"  alt="" />
            </Participants>
            <Info>
                w/ Sarah Pons, James Acaster, Rajesh Sterling & Nick Walter | New speakers wil be added soon!
                 <br/>
                Room for Music, Tech, Lifestyle and Business 
            </Info>
        </Container>
    )
}

export default Event


const Container = styled.div`
    width: 100%;
    box-shadow: 2px 2px 2px 1.8px rgba(0, 0, 0, 0.2);
    padding: 1em;
    border-radius: 1em;
    margin: 1em 0.5em;

    @media (max-width: 768px) {
        padding: 0.5em;
        border-radius: 0.5em;
    }
`

const Head = styled.div`
    display: flex;
`

const TitleTime = styled.div`
    flex: 1;

    p {
        margin-bottom: 0;
        color: gray;
        font-size: 18px;
    }

    span {
        font-weight: 500;
        font-size: 25px;
    }

    @media (max-width: 768px) {
        p {
            font-size: 14px;
        }

        span {
            font-size: 18px;
        }
    }
`

const NotificationI = styled(IoIosNotificationsOutline)`
    font-size: 35px;
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.02);
    border-radius: 10px;

    @media (max-width: 768px) {
        font-size: 25px;
    }
`

const Participants = styled.div`
    display: flex;
    margin: 0.4em;

    @media (max-width: 768px) {
        margin-top: 0.2em;
    }
`

const ParticipantImg = styled.img`
    height: 80px;
    width: 80px;
    object-fit: cover;
    border-radius: 1.1em;
    margin-right: 1em;

    @media (max-width: 768px) {
        height: 50px;
        width: 50px;
        margin-right: 0.5em;
    }
`

const Info = styled.p`
    @media (max-width: 768px) {
        font-size: 14px;
    }
`