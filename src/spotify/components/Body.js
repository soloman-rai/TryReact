import React from 'react'

import styled from 'styled-components'
import Header from './Header';
import BodyContent from './BodyContent';


const Body = ({ spotify }) => {
    return (
        <Container>
            <Header spotify={spotify} />
            <BodyContent />
        </Container>
    )
}

export default Body


const Container = styled.div`
    // border: 1px solid yellow;
    flex: 0.8;
    background: linear-gradient(rgb(91, 87, 115), rgba(1, 1, 23, 1));
    height: 100vh;
    padding: 30px;
    overflow-y: overlay;

    @media (max-width: 768px) {
        padding: 12px;
    }
`