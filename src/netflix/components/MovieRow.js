import React, { useState, useEffect } from 'react'

import axios from '../axios';
import '../assets/MovieRow.css';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_url = "https://image.tmdb.org/t/p/original/";


function MovieRow(props) {
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState('');

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    };

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

    useEffect(() => {
        const fetchURL = props.fetchURL
        // Run Anyncronous function 
        async function fetchData(){
            const request = await axios.get(fetchURL);
            // console.table(request.data.results);
            setMovies(request.data.results);
            // console.log(movies);
            return request;
        }
        fetchData();
    }, [props.fetchURL])

    return (
        <div className="movie_row">
            <h2 className="movie_row">{props.title}</h2>

            <div className="row_posters">
                {movies.map(movie => (
                    <img key={movie.id}
                        onClick = {() => handleClick(movie)}
                        className={`row_poster ${props.isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                ))}
            </div>

            {trailerURL && <Youtube videoId={trailerURL} opt={opts} /> } 
        </div>
    )
}

export default MovieRow
