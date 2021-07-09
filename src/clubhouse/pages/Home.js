import React, { useState } from 'react';

import styled from 'styled-components';
import Header from '../components/Header';
import DailyCard from '../components/DailyCard';
import RoomCard from '../components/RoomCard';
import { AiOutlinePlus } from 'react-icons/ai';
import { BsGrid3X3Gap } from 'react-icons/bs';
import BottomSheet from '../components/BottomSheet';
import data from '../data/room_cards.json';
import newRoomData from '../data/new_room.json';


const Home = () => {
    const [itemsVisible, setItemsVisible] = useState(true);
    const [sheetVisible, setSheetVisible] = useState(false);
    const [sheetCreateRoom, setSheetCreateRoom] = useState(false);
    const [loaderVisibility, setLoaderVisibility] = useState(false);
    const [cardId, setCardId] = useState(1);

    return (
        <>
            {loaderVisibility ? (
                <Loader>
                    <Gif src="/loader.gif" alt="Loader GIF" />
                </Loader>
            ) : ""}
            <Header /> 
            <HomeContainer>
                <DailyCard />
                <RoomCard
                    sheetTitle='new room'
                    setSheetVisible={(item) => setSheetCreateRoom(item)}
                    sheetVisible={sheetCreateRoom}
                    cardDetail={newRoomData}
                    setItemsVisible={item => setItemsVisible(item)}
                    setSheetCreateRoom={item => {
                        setLoaderVisibility(true);
                        setTimeout(() => {
                            setSheetCreateRoom(item)
                            setLoaderVisibility(false)
                        }, 2000);
                    }}
                />
            </HomeContainer>
            <ActionButton>
                <Button onClick={() => setSheetVisible(true)}>
                    <AiOutlinePlus />
                    <span>Start a Room</span>
                </Button>
                <Button>
                    <BsGrid3X3Gap />
                </Button>
            </ActionButton>
            <BottomSheet
                sheetTitle='start room'
                setSheetVisible={item => setSheetVisible(item)}
                sheetVisible={sheetVisible}
                cardDetail={data.find(item => item.id === cardId)}
                setItemsVisible={item => setItemsVisible(item)}
                setSheetCreateRoom={item => {
                    setLoaderVisibility(true);
                    setTimeout(() => {
                        setSheetCreateRoom(item)
                        setLoaderVisibility(false)
                    }, 1000);
                }}
            />
            <BottomSheet
                sheetTitle='new room'
                setSheetVisible={(item) => setSheetCreateRoom(item)}
                sheetVisible={sheetCreateRoom}
                cardDetail={newRoomData}
                setItemsVisible={item => setItemsVisible(item)}
            />
        </>
    )
}

export default Home


const HomeContainer = styled.div`
    padding: 3.5em 1em;
    height: 100%;
    overflow: auto;

    @media (min-width: 768px) {
        padding: 4em;
    }
`

const ActionButton = styled.div`
    display: flex;
    align-items: center;
    padding: 4em 1.5em 2em 1.5em;
    position: sticky;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(transparent 20%, #f2f0e4 80%);

    button:first-child {
        border-radius: 2em;
        color: #ffffff;
        background-color: #28ae61;
        padding: 0.3em 1em;
        font-size: 1.1em;
        font-weight: 400;
        display: flex;
        align-items: center;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
    }

    button:nth-child(2) {
        line-height: 1;
        
        svg {
            color: var(--textColor);
        }
    }

    @media (min-width: 768px) {
        button:first-child {
            padding: 0.5em 1.5em;
        } 
        span {
            font-size: 1.1em;
        }
    }
`

const Button = styled.button`
    background-color: transparent;
    border: none;
    margin-left: auto;

    span {
        margin-left: 1em;
    }
    
    svg {
        font-size: 1.3em;
    }

    @media (min-width: 768px) {
        svg {
            font-size: 2em;
        }
    }
`

const Loader = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Gif = styled.img``