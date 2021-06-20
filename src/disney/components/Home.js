import React, { useEffect } from 'react';

import styled from 'styled-components';
import Slider from './Slider';
import Channels from './Channels';
import Movies from './Movies';
import db from '../firebase';
import { useDispatch } from 'react-redux';
import { setMovies } from '../features/movie/movieSlice';


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        db.collection('movies').onSnapshot(snapshot => {
            let movies = snapshot.docs.map(doc => {
                return {id: doc.id, ...doc.data()}
            })
            // console.table(movies);
            dispatch(setMovies(movies));
        })
    }, [dispatch])

    return (
        <Container>
            <Slider />

            <Channels />

            <Movies />
        </Container>
    )
}

export default Home


const Container = styled.main`
    color: white;
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before {
        background: url('/disney/images/home-background.png') center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`