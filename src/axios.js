import axios from 'axios';

// Base URL to make requests to the movie database 
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// instance.get(./fool.url) ==>> https://api.themoviedb.org/3/./fool.url
export default instance;