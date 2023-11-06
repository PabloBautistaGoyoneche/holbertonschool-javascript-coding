const fs = require('fs'); // Import the 'fs' module to work with the file system.

const countStudents = (dataPath) => {
  // Check if the data file exists, if not, throw an error.
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }
  // Check if the dataPath is a file, if not, throw an error.
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error('Cannot load the database');
  }
  // Read the data file, split it into lines, and extract field names and student data.
  const fileLines = fs
    .readFileSync(dataPath, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  // Initialize an empty object to store student groups.
  const studentGroups = {};
  // Extract field names from the first line.
  const dbFieldNames = fileLines[0].split(',');
  // Extract student property names.
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);
  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(','); // Split each line into student records.
    // Extract student property values.
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1]; // Extract the field information.
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = []; // Create an array for the field if it doesn't exist.
    }
    // Map student property names to their values.
    const studentEntries = studentPropNames.map((propName, idx) => [
      propName,
      studentPropValues[idx],
    ]);
    // Add student data to the corresponding field.
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  const totalStudents = Object.values(studentGroups).reduce(
    (pre, cur) => (pre || []).length + cur.length,
  ); // Calculate the total number of students.

  console.log(`Number of students: ${totalStudents}`); // Display the total number of students.
  for (const [field, group] of Object.entries(studentGroups)) {
    // Extract student names and join them.
    const studentNames = group.map((student) => student.firstname).join(', ');
    console.log(
      // Display the number of students in each field and their names.
      `Number of students in ${field}: ${group.length}. List: ${studentNames}`,
    );
  }
};

module.exports = countStudents; // Export the countStudents function.
