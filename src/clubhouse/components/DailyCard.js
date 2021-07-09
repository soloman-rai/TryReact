import React from 'react';

import styled from 'styled-components';
import data from '../data/daily_cards.json';


const DailyCard = () => {
    // console.log(data);

    return (
        <Container>
            {data.map((item, index) => (
                <Event key={index}>
                    <Time>{item.time}</Time>
                    <EventMeta>
                        <Title>{item.title}</Title>
                        <Info>{item.description}</Info>
                    </EventMeta>
                </Event>
             ))}
        </Container>
    )
}

export default DailyCard


const Container = styled.div`
    background-color: #e7e4d5;
    padding: 0.5em 1em;
    border-radius: 1em;
    margin-bottom: 1.5em;
`

const Event = styled.div`
    display: flex;
    margin-bottom: 0.5em;
    align-items: flex-start;
`

const Time = styled.span`
    width: 20%;
    text-align: end;
    font-size: 0.675em;
    font-weight: 500;

    @media (min-width: 768px) {
        font-size: 1em;
    }
`

const EventMeta = styled.div`
    margin-left: 0.5em;
    display: flex;
    flex-direction: column;
    width: 80%;
`

const Title = styled.span`
    font-size: 0.675em;
    color: var(--textColor);
    font-weight: 500;

    @media (min-width: 768px) {
        font-size: 1em;
    }
`

const Info = styled.p`
    font-size: 0.875em;
    font-weight: 500;
    line-height: 1;
    margin: 0;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
    width: 195px;

    @media (min-width: 768px) {
        font-size: 1.5em;
        width: 340px;
    }
`