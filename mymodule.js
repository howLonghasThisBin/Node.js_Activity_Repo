var fs = require('fs');
// console.log('THIS IS FS:' + fs);
// Reads the file.
var path = require('path');
// console.log('THIS IS PATH:' + path);
// does some file formatting.

module.exports = function(dir, filterStr, callback) {
    // This allows to add value to the said variable from the other class.

    fs.readdir(dir, function(err, list) {
        if (err)
            return callback(err);

        list = list.filter(function(file) {
            return path.extname(file) === '.' + filterStr;
            // stops when '.' is read.
        })

        callback(null, list);
        // callback stores data
    })
}