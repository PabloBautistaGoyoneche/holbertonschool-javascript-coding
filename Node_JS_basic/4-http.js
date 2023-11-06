const http = require('http'); // Import the 'http' module.

const PORT = 1245; // Define the port number for the server.
const HOST = 'localhost'; // Define the hostname for the server.
const app = http.createServer(); // Create an HTTP server instance.

app.on('request', (_, res) => {
  // Define the response text to be sent to clients.
  const responseText = 'Hello Holberton School!';

  // Set response headers.
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);

  // Set the HTTP status code (200 OK).
  res.statusCode = 200;

  // Write the response text as a Buffer to the response stream.
  res.write(Buffer.from(responseText));
});

// Start the server and listen on the specified port and host.
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app; // Export the 'app' server instance.
