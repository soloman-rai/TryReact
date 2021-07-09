import React, { useState } from 'react';

import styled from 'styled-components';
import { FcGlobe, FcPortraitMode, FcPrivacy } from 'react-icons/fc';

const StartRoom = (props) => {
    const [room, setRoom] = useState('open');

    return (
        <>
            <SwitchLine></SwitchLine>
            <ActionButton>
                <AddTopicButton>+ Add a Topic</AddTopicButton>
            </ActionButton>
            <SelectRoom>
                <button
                    className={room === "open" ? "active" : ""}
                    onClick={() => setRoom("open")}
                >
                    <ButtonIcon>
                        <FcGlobe />
                    </ButtonIcon>
                    <span>Open</span>
                </button>

                <button
                    className={room === "social" ? "active" : ""}
                    onClick={() => setRoom("social")}
                >
                    <ButtonIcon>
                        <FcPortraitMode />
                    </ButtonIcon>
                    <span>Social</span>
                </button>

                <button
                    className={room === "closed" ? "active" : ""}
                    onClick={() => setRoom("closed")}
                >
                    <ButtonIcon>
                        <FcPrivacy />
                    </ButtonIcon>
                    <span>Closed</span>
                </button>
            </SelectRoom>
            <Subs>Start a room {" "}
                <span>{
                room === "closed" ? "for people I choose" :
                    room === "social" ? "with people I follow" :
                        "open to everyone"
                }</span>
            </Subs>
            <LetsGo>
                <button
                    onClick={() => {
                        props.setSheetCreateRoom(true);
                        props.setSheetVisible(true);
                    }}
                >
                    🎉 Let's Go!
                </button>
            </LetsGo>
        </>
    )
}

export default StartRoom


const SwitchLine = styled.div`
    position: absolute;
    top: 6px;
    left: 50%;
    transform: translateX(-50%);
    height: 4px;
    width: 35px;
    background-color: lightgray;

    @media (min-width: 768px) {
        width: 100px;
    }
`

const ActionButton = styled.div`
    text-align: right;

    @media (min-width: 768px) {
        font-size: 1.3em;
    }
`

const AddTopicButton = styled.button`
    background-color: transparent;
    border: none;
    color: #28ae61;
`

const SelectRoom = styled.div`
    border-bottom: 1px solid lightgray;
    padding: 1.5em 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
        border: none;
        background-color: transparent;
        border-radius: 1em;
        padding: 0.5em 1.3em 0.4em 1.3em;
        color: var(--textColor);
        line-height: 1.2;
    }

    button.active {
        border: 1px solid lightseagreen;
        background-color: lightblue;
    }

    @media (min-width: 768px) {
        padding: 2.5em;

        button {
            padding: 0.6em 1.5em;
            line-height: 1.5;
        }

        button > span {
            font-size: 1.3em;
        }
    }
`

const ButtonIcon = styled.div`
    background-color: lightseagreen;
    border-radius: 1.5em;
    margin-bottom: 0.1em;
    padding: 0.15em;

    svg {
        font-size: 3.2em;
    }

    @media (min-width: 768px) {
        margin-bottom: 0.2em;
        padding: 0.2em;

        svg {
            font-size: 4em;
        }    
    }
`

const Subs = styled.p`
    font-size: 1em;
    color: var(--textColor);
    text-align: center;
    font-weight: 500;
    margin-top: 0.1em;

    @media (min-width: 768px) {
        font-size: 1.5em;
    }
`

const LetsGo = styled.div`
    text-align: center;

    button {
        font-size: 1.3em;
        font-weight: 500;
        border: none;
        border-radius: 2em;
        color: #ffffff;
        background-color: #28ae61;
        padding: 0.3em 2em;
    }

    @media (min-width: 768px) {
        button {
            padding: 0.5em 2.2em;
        }
    }
`

