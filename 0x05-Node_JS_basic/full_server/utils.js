const fs = require('fs').promises;

const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n').slice(1);
    const students = {};

    lines.forEach(line => {
      const [firstname, , , field] = line.split(',');
      if (field) {
        if (!students[field]) students[field] = [];
        students[field].push(firstname);
      }
    });

    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = { readDatabase };
