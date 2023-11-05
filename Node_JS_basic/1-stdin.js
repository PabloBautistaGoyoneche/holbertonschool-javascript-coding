// We import the readline module from Node.js
const readline = require('readline');

// We created a readline interface to handle input and output.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// We show the welcome message.
console.log('Welcome to Holberton School, what is your name?');

// We ask the user to enter their name.
rl.question('', (name) => {
  console.log(`Your name is: ${name}`);
  console.log('This important software is now closing');
  rl.close();
});
