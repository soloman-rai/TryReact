import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

import styled from 'styled-components';

const SubHeader = (props) => {
    return (
        <Container>
            <Link to="/home"><ArrowBackIosIcon fontSize="large" /></Link>
            <h3>{props.pageTitle}</h3>
        </Container>
    )
}

export default SubHeader


const Container = styled.div`
    // position: relative;
    display: flex;
    align-items: center;
    text-align: center;
    margin-bottom: 0.5em;

    h3 {
        flex: 0.9;
        text-transform: uppercase;
    }

    svg {
        flex: 0.1;
    } 

    @media (max-width: 768px) {
        svg {
            font-size: 1.5em !important;
        }
        h3 {
            font-size: 1.2em;
        }
    }

`