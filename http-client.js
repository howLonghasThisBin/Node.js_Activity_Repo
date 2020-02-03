var http = require('http');
// console.log('THIS IS HTTP: ' + http);
// shows methods.
var url = process.argv[2];
// console.log('THIS IS URL: ' + url);
// url shown.

http.get(url, function(response) {
    // response as an eventListener.
    response.setEncoding('utf8');
    // formats to String. If not shows binary code.
    response.on('data', console.log);
    // reads and saves.
    response.on('error', console.error);
}).on('error', console.error);