#!/usr/bin/node
const request = require('request');

// Example Movie ID: 3 corresponds to "Return of the Jedi"
const movieId = process.argv[2]; // Get movie ID from command line

if (!movieId) {
  console.log("Debes proporcionar el ID de la película como argumento.");
  process.exit(1);
}

const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const movieData = JSON.parse(body);

    movieData.characters.forEach((characterUrl) => {
      request(characterUrl, (charError, charResponse, charBody) => {
        if (!charError && charResponse.statusCode === 200) {
          const characterData = JSON.parse(charBody);
          console.log(characterData.name);
        } else {
          console.error('Error getting character data:', charError);
        }
      });
    });
  } else {
    console.error('Error getting movie data:', error);
  }
});

