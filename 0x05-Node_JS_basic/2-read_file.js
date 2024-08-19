const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n').filter(line => line.trim() !== '');

        const students = lines.slice(1);
        const fields = {};

        students.forEach((student) => {
            const [firstName, , , field] = student.split(',');

            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstName);
        });

        console.log(`Number of students: ${students.length}`);
        for (const [field, students] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
