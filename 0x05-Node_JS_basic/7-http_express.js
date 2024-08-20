const express = require('express');
const fs = require('fs').promises;

const app = express();
const port = 1245;

const countStudents = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n').slice(1);
    const students = {};
    let total = 0;

    lines.forEach(line => {
      const [firstname, , , field] = line.split(',');
      if (field) {
        if (!students[field]) students[field] = [];
        students[field].push(firstname);
        total++;
      }
    });

    let output = `Number of students: ${total}\n`;
    for (const [field, names] of Object.entries(students)) {
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }
    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const output = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${output}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
