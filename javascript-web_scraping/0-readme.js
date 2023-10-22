#!/usr/bin/node
// Import the 'fs' module to work with the file system
const fs = require('fs');

// Check if the correct number of command line arguments is provided
if (process.argv.length !== 3) {
  console.error('Usage: node 0-readme.js <file_path>');
  process.exit(1); // Exit the program with an error code
}

// Get the file path from the command line argument
const filePath = process.argv[2];

// Read the content of the file in utf-8 encoding
fs.readFile(filePath, (err, data) => {
  if (err) {
    console.error(err); // Display the error if one occurs
  } else {
    console.log(data.toString()); // Display the file content if there are no errors
  }
});
