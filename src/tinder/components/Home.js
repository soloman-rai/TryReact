import React from 'react';

import TinderCards from '../components/TinderCards';
import SwipeButtons from '../components/SwipeButtons';
import Header from '../components/Header';


const Home = () => {
    return (
        <>
            <Header profileButton />
            <TinderCards />
            <SwipeButtons /> 
        </>
    )
}

export default Home
