import React from 'react';

import styled, { css } from 'styled-components';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';


const Footer = () => {
    return (
        <Container>

            <Left>
                <NowPlayingImg src="https://images.genius.com/a32c4772671773907170a67788e8e5c2.600x600x1.jpg" alt="Now Playling Song Thumbnail" />
                <NowPlayingInfo>
                    <SongName>Camp Lukewarm</SongName>
                    <SongArtist>Montel Fish</SongArtist>
                </NowPlayingInfo>
            </Left>

            <Center>
                <ShuffleI />
                <SkipPreviousI />
                <PlayI fontSize="large" />
                <SkipNextI />
                <LoopI />
            </Center>

            <Right>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistI />
                    </Grid>
                    <Grid item>
                        <VolumeDownI />
                    </Grid>
                    <Grid item>
                        <SliderM />
                    </Grid>
                </Grid>
            </Right>
        </Container>
    )
}

export default Footer


const Container = styled.div`
    position: fixed;
    bottom: 0;
    height: 65px;
    width: 97%;
    background: #222642;
    padding: 20px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        padding: 10px;
    }
`

const Left = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    max-width: 300px;


    @media (max-width: 768px) {
        flex: 0.1;
    }
`

const Center = styled.div`
    flex: 0.4;
    padding: 0 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;

    @media (max-width: 768px) {
        flex: 0.1;
        padding: 0px;
    }
`

const Right = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex: 0.1;
    }
`

const NowPlayingImg = styled.img`
    height: 100%;
    object-fit: contain;
    margin-right: 20px;
`

const NowPlayingInfo = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`

const SongName = styled.h4``

const SongArtist = styled.p``

const BtnHover = css`
    &:hover {
        transition: transform 0.2s ease-in-out;
        transform: scale(1.2) !important;
    }
`

const ShuffleI = styled(ShuffleIcon)`
    ${BtnHover}
    color: green !important;
`

const SkipPreviousI = styled(SkipPreviousIcon)`
    ${BtnHover}
`

const PlayI = styled(PlayCircleOutlineIcon)`
    ${BtnHover}
`

const SkipNextI = styled(SkipNextIcon)`
    ${BtnHover}
`

const LoopI = styled(RepeatIcon)`
    ${BtnHover}
    color: green !important;
`

const PlaylistI = styled(PlaylistPlayIcon)`
    @media (max-width: 768px) {
        display: none !important;
    }
`

const VolumeDownI = styled(VolumeDownIcon)`
    ${BtnHover}
`

const SliderM = styled(Slider)`
    color: green !important;

    @media (max-width: 768px) {
        display: none !important;
    }
`