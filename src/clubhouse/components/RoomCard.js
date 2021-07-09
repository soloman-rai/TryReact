import { React, useState, useEffect } from 'react';

import styled from 'styled-components';
import data from '../data/room_cards.json';
import { BsChatDots, BsChatDotsFill, BsFillPersonFill } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';


const RoomCard = (props) => {
    // console.log(data);
    // {data.map(room => {
    //     const members = room.members.slice(0, 2).map(function () { 
    //         return this.splice(Math.floor(Math.random() * this.length), 1)[0];
    //     }, room.members.slice());
    //     console.log(members);
    // })}

    return (
        <Container>
            {data.map(room => (
                <RoomCardWrapper key={room.id}>
                    <RoomCardContainer>       
                        <RoomCardBody>
                            <Title>{room.title}</Title>
                            <Subtitle>{room.sub_title}</Subtitle>
                            <RoomMembers>
                                <MembersImage>
                                    {room.members.slice(0, 2).map(function (item, index) { 
                                        let member = this.splice(Math.floor(Math.random() * this.length), 1)[0];
                                        // console.log(member, index);
                                        if (index === 0) {
                                            return (
                                                <MemberImageI key={index} src={member.image_url} alt = "Room Member Profile Picture" />)
                                        } else {
                                            return (
                                                <MemberImageII key={index} src={member.image_url} alt="Room Member Profile Picture" />
                                            )
                                        }
                                        }, room.members.slice()
                                    )}   
                                </MembersImage>
                                <MembersInfo>
                                    {room.members.map((member, i) => (
                                        <p key={i}>
                                            {member.first_name} {member.last_name} <BsChatDots />
                                        </p>
                                    ))}
                                </MembersInfo>
                            </RoomMembers>
                            <RoomInfo className="d-flex align-items-center">
                                <span className="mr-2">{room.listeners_count}</span>
                                <BsFillPersonFill />
                                <span className="mx-2">{" "}</span>
                                <span className="mr-2">{room.speakers_count}</span>
                                <BsChatDotsFill />
                            </RoomInfo>
                            <JoinRoom>
                                <button className="primaryBtn" onClick={() => {
                                    props.setSheetCreateRoom(true);
                                    props.setSheetVisible(true);
                                }}>
                                    Join <span>Room</span>
                                </button>
                            </JoinRoom>
                        </RoomCardBody>
                    </RoomCardContainer>
                </RoomCardWrapper>
            ))}
        </Container>
    )
}

export default RoomCard


const Container = styled.div`
`

const RoomCardWrapper = styled.div`
    &:hover {
        div > div > div:last-child {
            display: block;
        }
    }
`

const RoomCardContainer = styled.div``

const RoomCardBody = styled.div`
    background-color: #ffffff;
    padding: 1em;
    border-radius: 1em;
    border: none;
    margin-top: 0.5em;

    @media (min-width: 768px) {
        padding: 1.5em;
    }
`

const Title = styled.h6`
    color: var(--textColor);
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 0.675em;
    }
`

const Subtitle = styled.h2`
    font-weight: 500;
    line-height: 1;
    color: #000000;

    @media (max-width: 768px) {
        font-size: 0.875em;
    }
`

const RoomMembers = styled.div`
    display: flex;
    align-items: flex-start;
`

const MembersImage = styled.div`
    position: relative;
    margin-right: 2.5em;

    @media (max-width: 768px) {
        margin-right: 2em;
    }
`

const MemberImageI = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 0.6em;

    @media (min-width: 768px) {
        width: 60px;
        height: 60px;
    }
`

const MemberImageII = styled(MemberImageI)`
    position: absolute;
    left: 1em;
    top: 1em;

`

const MembersInfo = styled.div`
    p {
        font-size: 1.2em;
        font-weight: 500;
        line-height: 1;
        margin-bottom: 0.8em;
        color: var(--text-color);
    }

    @media (max-width: 768px) {
        p {
            font-size: 0.965em;
            margin-bottom: 0.5em;
        }
    }
`

const RoomInfo = styled.div`
    .mr-2 {
        margin-right: 0.7em;
    }
    
    .mx-2 {
        margin-left: 0.7em;
        margin-right: 0.7em;
    }

    @media (min-width: 768px) {
        span {
            font-size: 1.2em;
        }
        svg {
            height: 1.3em;
            width: 1.3em;
        }
    }
`

const JoinRoom = styled.div`
    text-align: right;
    display: none;
    
    button {
        padding: 0.25em 0.6em;
        border: none;
        outline: transparent;
    }

    @media (max-width: 768px) {
        button > 
        span {
            display: none;
        }
    }
`
