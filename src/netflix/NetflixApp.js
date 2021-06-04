import React from 'react';

import MovieRow from './components/MovieRow';
import requests from './requests';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import './assets/NetflixApp.css';


function NetflixApp() {
    return (
        <div className="app">
            {/* <h2>Netflixe Clone 🚀</h2> */}
            <Navbar />
            <Banner />

            <MovieRow title="Netflix Originals" fetchURL={requests.fetchNetflixOriginals} isLargeRow />
            <MovieRow title="Trending Now" fetchURL={requests.fetchTrending} />
            <MovieRow title="Top Rated" fetchURL={requests.fetchTopRated} />
            <MovieRow title="Action Movies" fetchURL={requests.fetchActionMovies} />
            <MovieRow title="Romantic Movies" fetchURL={requests.fetchRomanceMovies} />
            <MovieRow title="Comdey Movies" fetchURL={requests.fetchComedyMovies} />
            <MovieRow title="Documentaries" fetchURL={requests.fetchDocumentaries} />
            <MovieRow title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />

        </div>
    )
}

export default NetflixApp


// TMDB API settings and References
// API KEY = 7fbc9360be15ffe421f906449532c517

// API REQUEST SAMPLE = https://api.themoviedb.org/3/movie/550?api_key=7fbc9360be15ffe421f906449532c517
