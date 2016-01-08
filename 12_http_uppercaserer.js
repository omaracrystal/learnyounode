/*
12 - Write an HTTP server that receives only POST requests and converts incoming POST body characters to upper-case and returns it to the client. Your server should listen on the port provided by the first argument to your program.
 */


var map = require('through2-map');
var http = require('http');

http.createServer(function(inStream, outStream) {
    if(inStream.method == 'POST') {
        inStream.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(outStream);
    }
}).listen(process.argv[2]);


/* NOTES */
/*
through2
https://www.npmjs.com/package/through2
  A tiny wrapper around Node streams2 Transform to avoid explicit subclassing noise

through2-map
https://www.npmjs.com/package/through2-map
  through2-map is a super thin wrapper around through2 that works like Array.prototype.map but for streams.


Streams
https://www.codeschool.com/blog/2014/07/22/nodejs-streams2-api/

https://github.com/substack/stream-handbook
  For ultimate efficiency, especially when dealing with large data sent across the wire, we need to be able to get that data piece by piece, or chunk by chunk. If that happens, we can start manipulating the data as soon as it arrives and keep it from being held in memory all at once. We do that in Node using streams.

  Streams in Node are like channels where data can flow through. They can be different types, but we are going to look at the two most common: readable and writeable.

Pipe
  When all we do is write data to a Writeable stream as soon as it becomes available on the Readable stream, as in the previous example, then there’s a helper function we can use to pipe these two operations together called…pipe!

  The pipe() function handles all of the event listening and chunk reading behind the scenes for us.

  .pipe() is just a function that takes a readable source stream src and hooks the output to a destination writable stream dst === src.pipe(dst)
 */
