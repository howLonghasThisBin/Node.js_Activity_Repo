var fs = require('fs'); // require(), reads a readable file type (txt, etc.) read as a buffer (not string)
var read = fs.readFileSync(process.argv[2]); // .readFileSync(), reads the content of the file read (still buffer type)

var out = read.toString().split('\n').length - 1; // .toString, converts buffer to String type
// .split('\n'), divides into array by space (\n).
console.log(out);

/*
The suggested alternative solution (shorter)

const fs = require('fs');
const contents = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
// by adding 'utf8' after specifying the line to be read, it reads that line as a String.
// shortens the line of code.
console.log(contents);
*/