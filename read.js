const fs = require('fs');

fs.readFile('para.txt', 'utf8', (err, text) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    
    console.log(text);
});
