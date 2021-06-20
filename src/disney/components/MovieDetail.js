import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';
import GroupIcon from '@material-ui/icons/Group';
import db from '../firebase';
import { setMovies } from '../features/movie/movieSlice';


const MovieDetail = () => {
    const { movieID } = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        // console.log(movieID);
        db.collection('movies').doc(movieID).get()
            .then(doc => {
                if (doc.exists) {
                    //save the movie data
                    setMovie(doc.data());
                } else {
                    window.location.href = '/';
                }
        })
    }, [movieID])

    return (
        <Container>
            {movie && 
                <>
                <Background>
                    <img src={movie.backgroundImg} alt="" />
                </Background>

                <ImageTitle>
                    <img src={movie.titleImg} alt="" />
                </ImageTitle>

                <Controls>
                    <PlayButton>
                        <img src="/disney/images/play-icon-black.png" alt="Button Icon" />
                        <span>Play</span>
                    </PlayButton>

                    <TrailerButton>
                        <img src="/disney/images/play-icon-white.png" alt="Button Icon" />
                        <span>Trailer</span>
                    </TrailerButton>

                    <AddButton>
                        <span>+</span>
                    </AddButton>

                    <GroupWatchButton>
                        <GroupIcon style={{ color: 'white' }} />
                    </GroupWatchButton>
                </Controls>

                <Subtitle>
                    {movie.subTitle}
                </Subtitle>

                <Description>
                    {movie.description}
                </Description>
                </>
            }
        </Container>
    )
}

export default MovieDetail


const Container = styled.div`
    min-height: calc(100vh - 17px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    opacity: 0.8;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    height: 30vh;
    width: 35vw;
    min-height: 170px;
    min-wdith: 200px;
    margin-top: 40px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        margin-top: 15px;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
`


const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    padding: 0px 24px;
    margin-right: 22px;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover {
        background: rgb(198, 198, 198);
    }

    span {
        text-transform: uppercase;
        font-weight: 800;
    }

    @media (max-width: 768px) {
        padding: 0px 8px;
        letter-spacing: 1px;
        font-size: 10px;
        margin-right: 10px;
        height: 45px;
    }

`


const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
`

const AddButton = styled.button`
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    margin-right: 16px;

    span {
        font-size: 30px;
        color: white;
    }

    @media (max-width: 768px) {
        height: 35px;
        width: 35px;
        margin-right: 9px;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`


const Subtitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;

    @media (max-width: 768px) {
        font-size: 12px;
        min-height: 15px;
        margin-top: 20px;
    }
`


const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;

    @media (max-width: 768px) {
        line-height: 1.2;
        font-size: 16px;
        margin-top: 11px;
    }
`