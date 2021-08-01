import React from 'react';

import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import Fade from 'react-reveal';
import { useSelector } from 'react-redux';
import { selectCars } from '../features/carSlice';


const Sidebar = (props) => {
    const cars = useSelector(selectCars);

    return (
        <Container>
            <Fade right>
                <CustomClose>
                    <CloseI onClick={() => props.setOpenSidebar(false)} />
                </CustomClose>
                {cars && cars.map((car, index) => (
                    <li><a href="#">{car}</a></li> 
                ))}
                <li><a href="#">Existing Inventory</a></li>
                <li><a href="#">Used Inventory</a></li>
                <li><a href="#">Trade-in</a></li>
                <li><a href="#">Cybertruck</a></li>
                <li><a href="#">Roadaster</a></li>
            </Fade>
        </Container>
    )
}

export default Sidebar


const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: #55585d;
    width: 300px;
    z-index: 10;
    list-style: none;
    padding: 20px;
    transition: all 0.2s ease-in-out; 

    li {
        padding: 1em 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);

        a {
            font-weight: 600;
            color: white;
        }
    }

    @media (max-width: 768px) {
        padding: 15px;
        width: 200px;

        li > a {
            font-size: 0.875em;
        }
    }

`

const CustomClose = styled.div`
    display: flex;
    justify-content: flex-end;
    cursor: pointer;
`

const CloseI = styled(CloseIcon)`
    fill: white !important;

    @media (min-width: 768px) {
        font-size: 2em !important;
    }
`
