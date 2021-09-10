const path = require('path');

// get the separator of the directory
console.log(path.sep);

// base file name
console.log(path.basename(__filename));

// directory name (doesn't get the file inside the folder)
console.log(path.dirname(__filename));

// file extension
console.log(path.extname(__filename));

// create path object, base to get base file name
console.log(path.parse(__filename).base);

// join path
console.log(path.join(__dirname, 'test', 'index.html'));
