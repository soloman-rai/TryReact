import React, { useState } from 'react';

import styled from 'styled-components';
import { AiOutlineFile, AiOutlinePlus } from 'react-icons/ai';
import { BsMicFill, BsMicMuteFill } from 'react-icons/bs';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { IoMdHand } from 'react-icons/io';


const NewRoom = (props) => {
    const [micMuted, setMicMuted] = useState(false);
    const card = props.cardDetail;
    const [itemsVisible, setItemsVisible] = useState(true);

    return (
        <RoomContainer>
            <Head>
                <div className="d-flex align-items-center">
                    <a href="" onClick={() => props.setSheetVisible(false)}>
                        <BackI />
                    </a>
                    <span>Hallway</span>
                </div>
                <div>
                    <AiOutlineFile />
                    <HeadImage src="https://images.unsplash.com/photo-1518725522904-4b3939358342?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="User Profile Picture" />
                </div>
            </Head>
            <Body>
                <RoomMembers className="d-flex align-items-center justify-content-content flex-wrap">
                    {card.members.map((item, index) => (
                        <MemberContainer key={index}>
                            {micMuted && (
                                <AudioIcon><BsMicMuteFill /></AudioIcon>
                            )}
                            <MemberImage src={item.image_url} alt="Room Member Profile Picture" />
                            <MemberInfo>
                                <span>*</span>
                                {item.first_name}
                            </MemberInfo>
                        </MemberContainer>
                    ))}
                </RoomMembers>
            </Body>
            <Footer>
                <LeaveButton onClick={() => props.setSheetVisible(false)}>
                    <img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/25/victory-hand_emoji-modifier-fitzpatrick-type-5_270c_1f3fe.png" alt="Hand Peace Emoji" />
                    Leave Quietly
                </LeaveButton>
                <Controls>
                    <button><AiOutlinePlus /></button>
                    <button><IoMdHand /></button>
                    <button onClick={() => setMicMuted(!micMuted)}>
                        {micMuted ? <BsMicMuteFill /> : <BsMicFill />}
                    </button>
                </Controls>
            </Footer>
        </RoomContainer>
    )
}

export default NewRoom


const RoomContainer = styled.div`
    height: 100%;
    background: #f2f0e4;
    margin: -1.5em -1em;
`

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8em 0.5em 1.5em 0.8em;

    span {
        font-size: 1em;
        margin-left: 0.5em;
    }

    svg {
        font-size: 1.4em;
    }

    @media (min-width: 768px) {
        span {
            font-size: 1.5em;
        }
        svg {
            font-size: 1.8em;
        }
    }
`

const BackI = styled(KeyboardArrowDownIcon)`
    width: 15px;
    margin-top: -0.5em;
    font-size: 2em !important;
    
    @media (min-width: 768px) {
        font-size: 3em !important;
    }
`

const HeadImage = styled.img`
    height: 25px;
    width: 25px;
    border-radius: 50%;
    margin-left: 1.2em;
    object-fit: cover;

    @media (min-width: 768px) {
        height: 35px;
        width: 35px;
    }
`

const Body = styled.div`
    background-color: #ffffff;
    height: 70vh;
    overflow-y: scroll;
    padding: 0.8em 0;

    h6 {
        font-size: 0.675em;
        color: var(--textColor);
        font-weight: 500;
        margin-bottom: 0.3em;
    }

    @media (min-width: 768px) {
        height: 72.5vh;
        padding: 1em 1em 3em 1em;
    }
`

const RoomMembers = styled.div`
    padding: 0.5em 1em;
`

const MemberContainer = styled.div`
    text-align: center;
    // width: 70px;
    position: relative;
`

const AudioIcon = styled.div`
    position: absolute;
    right: -5px;
    bottom: 36px;
    z-index: 5;
    background-color: #ffffff;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 0px 1.5px #cccccc;

    svg {
        color: #28ea61;
    }
`

const MemberImage = styled.img`
    height: 70px;
    width: 70px;
    border-radius: 25%;
    margin-left: 1.2em;
    object-fit: cover;

    @media (min-width: 768px) {
        height: 100px;
        width: 100px;
    }
`

const MemberInfo = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    font-weight: 500;
    color: #000000;
    margin-top: 0.3em;

    span {
        font-size: 2.5em;
        display: inline-block;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background-color: #28ae61;
        color: #ffffff;
        margin-right: 0.1em;
        line-height: 0.8em;
    }
`

const Footer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    padding: 1em;

    button {
        border: none;
        border-radius: 2em;
    }
    
    @media (min-width: 768px) {
        padding: 1.5em;
    }
`

const LeaveButton = styled.button`
    display: flex;
    align-items: center;
    padding: 0.3em 1em;
    color: #28ae61;
    font-weight: 500;
    background-color: #e7e4de5;

    img {
        width: 30px;
    }

    @media (min-width: 768px) {
        font-size: 1.3em;

        img {
            width: 40px;
        }
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    
    button {
        line-height: 1;
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0.2em;
        font-size: 1.5em;
    }

    @media (min-width: 768px) {
        button {
            line-height: 1.5;
            width: 40px;
            height: 40px;
            font-size: 3em;
            margin: 0.3em;
        }
    }
`