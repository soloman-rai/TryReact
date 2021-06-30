// Everthing related to Spotify 

// API Client ID: cb12470931a042ce8047d9bf837bf2b7


// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = 'https://accounts.spotify.com/authorize';

// const redirectUri = 'http://localhost:3000/';    // 👉 For development
const redirectUri = 'https://spotify-65645.web.app/'  // 👉 For production


const clientId = 'cb12470931a042ce8047d9bf837bf2b7';


// Allowing permissions to the user being locked in
const scopes = [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
]

export const getTokenFromResponse = () => {
    return window.location.hash
        .substring(1) // chop the string at hash i.e. # 
        .split('&')     // split at the next occurence of &
        .reduce((initial, item) => {
            let parts = item.split('=')
            initial[parts[0]] = decodeURIComponent(parts[1]);

            return initial
    }, {})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;