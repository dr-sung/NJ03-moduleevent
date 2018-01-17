const fs = require('fs');
const os = require('os');

const userInfo = os.userInfo();
const date = new Date();
const filename = 'data.txt';

fs.appendFile(filename, JSON.stringify(userInfo, null, 2),
    (error) => {
        if (error) {
            throw error;
        }
    console.log('File write(append) successful!');
});

fs.readFile(filename, 'utf8', (error, data) => {
    if (error) {
        throw error;
    }
    console.log('Reading from', filename);
    console.log(data);
});
