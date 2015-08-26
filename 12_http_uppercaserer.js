/*
12 - Write an HTTP server that receives only POST requests and converts incoming POST body characters to upper-case and returns it to the client. Your server should listen on the port provided by the first argument to your program.
 */


var map = require('through2-map')
var http = require('http')
http.createServer(function(inStream, outStream) {
    if(inStream.method == 'POST') {
        inStream.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(outStream)
    }
}).listen(process.argv[2]);
