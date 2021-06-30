import React from 'react';

import styled from 'styled-components';


const SongItem = ({ track }) => {
    return (
        <Container>
            {/* here */}
            <SongImg src={track.album.images[0].url} alt={track.name} />

            <SongInfo>
                <SongTitle>{track.name}</SongTitle>
                <p>{track.artists.map(artist => artist.name).join(', ')} - {' '} {track.album.name}</p>
            </SongInfo>

        </Container>
    )
}

export default SongItem


const Container = styled.div`
    margin-left: 20px;
    padding: 20px; 
    display: flex; 
    align-items: center;
    z-index: 100;
    // width: 100%;

    &:hover {
        cursor: pointer;
        background-color: #0a0052;
        opacity: 0.8;
    }
`

const SongImg = styled.img`
    height: 50px;
    width: 50px;
    object-fit: contain;
`

const SongInfo = styled.div`
    margin-left: 20px;

    p {
        margin-top: 3px;
    }

    @media (max-width: 768px) {
        p {
            font-size: 13px;
        }
    }
`

const SongTitle = styled.h1`
    font-size: 16px;
    margin-top: 3px;
    color: lightgray;
`
