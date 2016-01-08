/*
11 - Write an HTTP server that serves the same text file for each request it receives.
Your server should listen on the port provided by the first argument to your program.
You will be provided with the location of the file to serve as the second command-line argument. You must use the fs.createReadStream() method to stream the file contents to the response.
 */

var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
    var src = fs.createReadStream(process.argv[3]);
    src.pipe(res);
});
server.listen(process.argv[2]);


/* NOTES */
/*
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
