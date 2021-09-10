const fs = require('fs');
const path = require('path');

// create folder
fs.mkdir(path.join(__dirname, '/test'), {}, (err) => {
  if (err) throw err;
  console.log('Folder created...');
});

// create and write file
fs.writeFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'Hello World',
  (err) => {
    if (err) throw err;
    console.log('File written to...');

    // append text to file
    fs.appendFile(
      path.join(__dirname, '/test', 'hello.txt'),
      '. I love Nodejs',
      (err) => {
        if (err) throw err;
        console.log('File appended to...');
      }
    );
  }
);

// read file
fs.readFile(
  path.join(__dirname, '/test', 'hello.txt'),
  'utf-8',
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);

// rename file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'nodejs.txt'),
  (err) => {
    if (err) throw err;
    console.log('File renamed...');
  }
);
