#!/usr/bin/node

// Import the 'request' module to make HTTP requests
const request = require('request');

// Check if the correct number of arguments (3) is provided in the command line
if (process.argv.length !== 3) {
  console.error('Usage: node 3-starwars_title.js <movie_id>');
  process.exit(1);
}

// Get the movie ID from the command line arguments
const movieId = process.argv[2];
// Create the URL for the Star Wars API request
const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request.get(url, (error, response, body) => {
  // Check if an error occurred during the request
  if (error) {
    console.error(error);
    process.exit(1);
  }

  // Check if the response status code is 200 (OK)
  if (response.statusCode === 200) {
    // Parse the JSON response
    const movieData = JSON.parse(body);
    // Print the title of the movie
    console.log(movieData.title);
  } else {
    // Print an error message for unsuccessful requests.
    console.error(`Error: Failed to retrieve movie data. Status code: ${response.statusCode}`);
    process.exit(1);
  }
});
