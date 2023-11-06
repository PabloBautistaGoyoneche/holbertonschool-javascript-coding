const express = require('express'); // Import the 'express' module.

const app = express(); // Create an Express application instance.
const PORT = 1245; // Define the port number for the server.

app.get('/', (_, res) => {
  // Define a route for handling HTTP GET requests to the root path ('/').
  res.send('Hello Holberton School!'); // Send the response 'Hello Holberton School!'
});

// Start the server and listen on the specified port.
app.listen(PORT, () => {
  // Log a message indicating that the server is listening.
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app; // Export the 'app' Express application instance
