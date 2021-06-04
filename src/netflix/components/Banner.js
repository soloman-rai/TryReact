import React, { useState, useEffect } from 'react'


import axios from '../axios';
import requests from '../requests';
import '../assets/Banner.css';
import movieTrailer from 'movie-trailer';
import Youtube from 'react-youtube';

const base_url = "https://image.tmdb.org/t/p/original/";


function Banner() {

    const [movie, setMovie] = useState([]);
    const [trailerURL, setTrailerURL] = useState('');

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchTrending);
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
        }
        fetchData();
    }, [])

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;   
    }

    const handleClick = (movie) => {
        // console.log(movie);
        if (trailerURL !== '') {
            setTrailerURL('');
        } else {
            movieTrailer(movie?.name || "")
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerURL(urlParams.get("v"));
                }).catch((err) => console.log(err));
        }
    }

    return (
        <>
            <header className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url("${base_url}${movie?.backdrop_path}")`,
                    backgroundPosition: "center center"
                }}
            >
                {/* With background image  */}
                <div className="banner_contents">
                    <h1 className="banner_title">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>

                    <div className="banner_buttons">
                        <button className="banner_button" onClick={() => handleClick(movie)}>Play </button>
                        <button className="banner_button">My List</button>
                    </div>

                    <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
                </div>

                <div className="banner--fadeBottom" />      
            </header>
            {trailerURL && <Youtube videoId={trailerURL} opt={opts} /> } 
        </>
    )
}

export default Banner
