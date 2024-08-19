const fs = require('fs');

module.exports = function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n');
        const students = lines.filter((line) => line !== '');
        const fields = {};
        students.forEach((line) => {
          const [_, field] = line.split(',');
          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(line.split(',')[0]);
        });
        console.log(`Number of students: ${students.length}`);
        Object.keys(fields).forEach((field) => {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        });
        resolve();
      }
    });
  });
};
