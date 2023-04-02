function fetchMovies() {
  const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles/x/upcoming',
    headers: {
      'X-RapidAPI-Key': 'fd49a2c0d5msh1efdb2b542dff9ep1f419ajsn9b4034a98e1d',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };

  return axios.request(options);
}

export default {
  fetchMovies
}