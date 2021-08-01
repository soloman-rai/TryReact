import React, { useState } from 'react'

import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from './Sidebar';
import { selectCars } from '../features/carSlice';
import { useSelector } from 'react-redux';


const Header = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const cars = useSelector(selectCars);
    // console.log(cars);

    return (
        <Container>
            <Left>
                <a href="">
                    <img src="https://cdn.worldvectorlogo.com/logos/tesla-9.svg" alt=""/>
                </a>
            </Left>

            <Center>
                {cars && cars.map((car, index) => (
                    <a href="#" key={index}>{car}</a>
                ))}
            </Center>

            <Right>
                <a href="#">Shop</a>
                <a href="#">Tesla Account</a>
                <a onClick={() => setOpenSidebar(true)}><MenuI /></a>
            </Right>
            {openSidebar &&    
                <Sidebar setOpenSidebar={item => setOpenSidebar(item)} />
            }
        </Container>
    )
}

export default Header


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    padding: 1em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    @media (max-wdith: 768px) {
        padding: 0;
    }
`

const Left = styled.div`
    a > img {
        height: 20px;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        flex: 1;

        a > img {
            height: 13px;
        }
    }
`

const Center = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 0.5em;
        flex-wrap: no-wrap;
    }

    @media (max-width: 768px) {
        display: none;
    }
`

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    a {
        font-weight: 600;
        text-transform: uppercase;
        margin-right: 10px;
        flex-wrap: no-wrap;
    }

    a:last-child {
        cursor: pointer;
    }

    @media (max-width: 768px) {
        margin-right: 5px;

        a:nth-child(2) {
            display: none;
        }
    }
`

const MenuI = styled(MenuIcon)`
    
    @media (max-width: 768px) {
        font-size: 13px;
    }
`
