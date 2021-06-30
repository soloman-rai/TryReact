import React from 'react';


import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, InputBase } from '@material-ui/core';
import { useStateValue } from '../context/Provider';


const Header = ({ spotify }) => {
    const [{ user }, dispatch] = useStateValue();

    return (
        <Container>
            <HeaderLeft> 
                <SearchIcon fontSize="small" />
                <SearchInput placeholder="Search Artists, Songs or Podcasts " type="text" />
            </HeaderLeft>

            <HeaderRight>
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <Username>{user?.display_name}</Username>
            </HeaderRight>
        </Container>
    )
}

export default Header


const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
`

const HeaderLeft = styled.div`
    background-color: white;
    color: gray;
    border-radius: 30px;
    display: flex;
    align-items: center;
    padding: 10px;
    flex: 0.6;
    min-width: 80px;

    @media (max-width: 768px) {
        padding: 0 5px;
        flex: 0.7;
    }
`

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
`

const SearchInput = styled(InputBase)`
    border: none;
    outline: none;
    width: 100%;
    margin-left: 5px;
`

const Username = styled.h4`
    margin-left: 10px;

    @media (max-width: 768px) {
        font-size: 10px;
    }
`