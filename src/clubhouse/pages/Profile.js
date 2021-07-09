import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { BsAt, BsPlus, BsUpload } from 'react-icons/bs';
import { AiOutlineInstagram, AiOutlineSetting, AiOutlineTwitter } from 'react-icons/ai';


const Profile = () => {
    return (
        <ProfileContainer>
            <Header>
                <Head className="text-right mb-0">
                    <Link to='/home'>
                        <BackI />
                    </Link>
                </Head>
                <Action>
                    <BsAt />
                    <BsUpload />
                    <AiOutlineSetting />
                </Action>
            </Header>
            <ProfileImage src="https://images.unsplash.com/photo-1595152452543-e5fc28ebc2b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="User Profile Picture" />
            <h4>James Dean</h4>
            <p>@dean.james</p>
            
            <Follow>
                <p>
                    <span>10</span> followers
                </p>
                <p>
                    <span>20</span> following
                </p>
            </Follow>
            <AddBioButton>Add a bio</AddBioButton>
            <Social className="mb-4">
                <button className="mb-0"> <AiOutlineTwitter /> Add Twitter</button>
                <button className="mb-0"> <AiOutlineInstagram /> Add Instagram</button>
            </Social>
            <Nomination>
                <img src="https://images.unsplash.com/photo-1605369572399-05d8d64a0f6e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="Nominated By Profile" />
                <div>
                    <p>Joined 14th July, 2021</p>
                    <p>Nominated by <span>Alfodia Checkov</span></p>
                </div>
            </Nomination>
            <Membership>
                <p>Member of </p>
                <MembershipWrapper>
                    <Groups>
                        <img src="https://images.unsplash.com/photo-1625227586820-825dda5d3c95?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Group Thumbnail" />
                        <img src="https://images.unsplash.com/photo-1625220966725-4d43a556c7ba?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80" alt="Group Thumbnail" />
                        <img src="https://images.unsplash.com/photo-1625239185060-88135bd3519b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80" alt="Group Thumbnail" />
                    </Groups>
                    <AddMemberButton> <BsPlus /> </AddMemberButton>
                </MembershipWrapper>
            </Membership>
        </ProfileContainer>
    )
}

export default Profile


const ProfileContainer = styled.div`
    height: 100%;
    overflow: auto;
    padding: 1em 3em;
    padding-top: 6em;

    h4 {
        color: var(--textColor);
        margin: 0.5em 0 0.1em 0;
    }

    p {
        font-size: 1.1em;
        color: #aaaaaa;
        margin: 0;
    }

    @media (max-width: 768px) {
        padding: 0 0.5em;
        padding-top: 5em;

        h4 {
            font-size: 1.3em;
        }
        p {
            font-size: 0.975em;
        }
    }

    button {
        border: none;
        background-color: transparent;
        color: var(--btnBgColor);
        margin-bottom: 2em;
    }
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1em 0.8em;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    background-color: #f2f0e4;
    z-index: 5;

    @media (min-width: 768px) {
        padding: 1.5em;
    }
`

const Head = styled.div``

const BackI = styled(ArrowBackIosIcon)`
    @media (min-width: 768px) {
        font-size: 2em !important;
    }
`

export {BackI}

const Action = styled.div`
    svg {
        font-size: 2em;
        margin-right: 1em;
    }

    svg:last-child {
        margin-right: 0.2em;
    }
`

const ProfileImage = styled.img`
    width: 80px;
    border-radius: 25%;

    @media (min-width: 768px) {
        width: 125px;
    }
`

const Follow = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2em;

    p:first-child {
        margin-right: 2.5em;
    }

    p > span {
        font-weight: 500;
        color: var(--textColor);
        margin-right: 0.2em;
        font-size: 1.3em;
    }

    @media (min-width: 768px) {
        margin-top: 0.6em;
        margin-bottom: 2.5em;

        p > span {
            margin-right: 0.3em;
            font-size: 1.6em;
        }
    }
`

const AddBioButton = styled.button`
    @media (min-width: 768px) {
        font-size: 1.25em;
    }
`

const Social = styled.div`
    @media (min-width: 768px) {
        button {
            font-size: 1.2em;
        }
    }
`

const Nomination = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1em;

    img {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 25%;
        margin-right: 0.5em;
    }

    p span {
        font-weight: 500;
        color: var(--textColor);
    }

    @media (max-width: 768px) { 
        p {
            font-size: 0.95em;
            line-height: 1.4;
        }
    }

    @media (min-width: 768px) {
        margin-bottom: 1.6em;

        img {
            width: 60px;
            height: 60px;
            margin-right: 1em;
        }
    }
`

const Membership = styled.div``

const MembershipWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.5em;
`

const Groups = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 45px;
        height: 45px;
        object-fit: cover;
        border-radius: 50%;
        margin-right: 0.5em;
    }

    @media (min-width: 768px) {
        img {
            height: 55px;
            width: 55px;
        }
    }
`

const AddMemberButton = styled.button`
    background-color: lightblue !important;
    margin-bottom: 0 !important;
    padding: 0.8em 1em;
    border-radius: 20%;
    line-height: 1;
    margin-top: 0.3em;
    margin-left: 0.3em;

    @media (max-width: 768px) {
        padding: 0.6em 0.8em;
    }
`