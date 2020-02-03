var fs = require('fs');
var read = process.argv[2];
// starts with [2], since the [0] and [1] contains directory of the read file.

fs.readFile(read, function(err, contents) {
    // contents here is a variable initialized with the function.
    var readLine = contents.toString().split('\n').length - 1;
    // length - 1, like an array it length is equals to the number of variables in it from 0.
    // This helps so that when traversing it won't go out of bounds.
    console.log(readLine);
})