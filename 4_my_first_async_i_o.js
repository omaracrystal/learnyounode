/*
Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first command-line argument.

We need everything in the previous exercise, except we want to use an asynchronous process instead of readFileSync.
*/
var fs = require('fs');
var file = process.argv[2];
//Instead of fs.readFileSync() you will want to use fs.readFile() and instead of using the return value of this method you need to collect the value from a callback function that you pass in as the second argument.
fs.readFile(file, function(err, contents) {
  //fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1;
  console.log(lines);
});


/* NOTES
In an asynchronous app, an event loop runs, which means that the readFile function will not block other functions from happening, it will just continue working whilst the rest of the script is loaded.
 */
