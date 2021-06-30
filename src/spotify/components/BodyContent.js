import React from 'react'

import styled from 'styled-components';
import { useStateValue } from '../context/Provider';
import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongItem from './SongItem';


const BodyContent = () => {
    const [{ discoverWeekly }, dispatch] = useStateValue();
    console.log(discoverWeekly);

    return (
        <Container>
            <DiscoverContainer>
                <DiscoverImage src={discoverWeekly?.images[0].url} alt="Discover Weekly Thumbnail" />

                <DiscoverContent>
                    <strong>Playlist</strong>
                    <h2>Discover Weekly</h2>
                    <p> {discoverWeekly?.description} </p>
                </DiscoverContent>
            </DiscoverContainer>
            
            <DiscoverSongs>
                <SongIcons>
                    <PlayI />
                    <FavoriteI fontSize="large" />
                    <MoreHorizIcon />
                </SongIcons>

                {/* List of Discover Weekly Songs */}
                {discoverWeekly?.tracks.items.map(item => (
                    <SongItem key={item.track.id} track={item.track} />
                ))}
            </DiscoverSongs>
        </Container>
    )
}

export default BodyContent


const Container = styled.div`
`

const DiscoverContainer = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 10px;

    @media (max-width: 768px) {
        padding: 5px;
    }
`

const DiscoverImage = styled.img`  
    height: 20vw;
    object-fit: contain;
    margin: 0 20px;
    box-shadow: 0 4px 60px rgba(0, 0, 0, 1);

    @media (max-width: 768px) {
        margin: 0 7px;
    }
`

const DiscoverContent = styled.div`
    flex: 1;

    strong {
        text-transform: uppercase;
    }

    h2 {
        font-size: 48px;
        margin-bottom: 10px;
        margin-top: 10px;
    }

    p {
        font-size: 14px;
    }

    @media (max-width: 768px) {
        h2 {
            font-size: 15px;
            margin-bottom: 5px;
        }

        p {
            display: none;
        }

        strong {
            font-size: 8px;
        }
    }
`

const DiscoverSongs = styled.div`
    margin: 20px -30px;
    padding-bottom: 30px;
`

const SongIcons = styled.div`
    display: flex;
    align-items: center;

    & .MuiSvgIcon-root {
        margin-right: 20px !important;
    }

    @media (max-width: 768px) {
        & .MuiSvgIcon-root {
            margin-right: 7px !important;
        }
    }
`

const PlayI = styled(PlayCircleFilledWhiteIcon)`
    font-size: 80px !important;
    margin-left: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #1db954;
    cursor: pointer;

    &:hover {
        transition: 100ms transform ease-in;
        transform: scale(1.08);
    }

    @media (max-width: 768px) {
        font-size: 40px !important;
    }
`

const FavoriteI = styled(FavoriteBorderOutlinedIcon)`
    cursor: pointer;

    @media (max-width: 768px) {
        font-size: 25px !important;
    }
`