import axios from 'axios';

// base URl to make requests to the movie database using the APIs
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});


export default instance;