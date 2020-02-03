var filterFn = require('./mymodule.js');
// similar to method calling from another class.
var dir = process.argv[2];
// console.log('THIS IS DIR:' + dir);
// the cd to the file.
var filterStr = process.argv[3];
// console.log('THIS IS FILTER:' + filterStr);
// the accepted(formatted?) file format.

filterFn(dir, filterStr, function(err, list) {
    // function have an err for when it happens
    if (err)
        return console.error('Error at:', err);

    list.forEach(function(file) {
        // reads each line.
        console.log(file);
        // stores/writes in file.
    })
})