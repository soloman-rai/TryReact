import React from 'react'

import styled from 'styled-components';
import Sidebar from './Sidebar';
import Body from './Body';
import Footer from './Footer';


const Player = ({ spotify }) => {
    return (
        <Container>
            <WebPlayer>
                <Sidebar />
                <Body spotify={spotify} />
            </WebPlayer>
            <Footer />
        </Container>
    )
}

export default Player

const Container = styled.div`
`

const WebPlayer = styled.div`
    display: flex;
`
