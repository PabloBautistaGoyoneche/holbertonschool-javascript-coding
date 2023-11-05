// Print a welcome message to the console.
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for the 'readable' event on the standard input (stdin).
process.stdin.on('readable', () => {
  const chunk = process.stdin.read();

  if (chunk) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
