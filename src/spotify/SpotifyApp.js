import React, { useEffect } from 'react'

import styled from 'styled-components';
import Login from './components/Login';
import { getTokenFromResponse } from './spotify';
import { useStateValue } from './context/Provider';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';


// Wrapper for spotify API 
const spotify = new SpotifyWebApi();

function SpotifyApp() {
    // const [token, setToken] = useState(null);
    const [{user, token}, dispatch] = useStateValue();

    useEffect(() => {
        const hash = getTokenFromResponse();
        window.location.hash = '';

        console.log('Token 👉 ', hash.access_token);
        const _token = hash.access_token;

        if (_token) {
            dispatch({
                type: 'SET_TOKEN',
                token: _token
            })
            // setToken(_token);

            spotify.setAccessToken(_token);

            spotify.getMe().then(user => {
                // console.log('🧔', user);
                dispatch({
                    type: 'SET_USER',
                    user: user
                })
            });

            spotify.getUserPlaylists().then(playlists => {
                dispatch({
                    type: 'SET_PLAYLISTS',
                    playlists: playlists,
                })
            })

            spotify.getPlaylist('37i9dQZEVXcLBbFYVn45P4')
                .then(res => dispatch({
                    type: 'SET_DISCOVER_WEEKLY',
                    discoverWeekly: res,
                }))
        }
    }, [dispatch])

    console.log('🧔 from Context', user);
    console.log('Token from Context', token);

    return (
        <Container>
            {/* Spotify Main 🚀 */}

            { token ? (
                    <Player spotify={spotify} />
                ): (            
                    <Login />
                )   
            }
        </Container>
    )
}

export default SpotifyApp


const Container = styled.main`
`
