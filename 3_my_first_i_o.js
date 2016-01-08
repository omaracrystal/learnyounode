/*
Write a program that uses a single {bold}synchronous{/bold} filesystem operation to
read a file and print the number of newlines it contains to the
console (stdout), similar to running `cat file | wc -l`.
The full path to the file to read will be provided as the first
command-line argument.
*/

/*
By default, Node.js installations come with the file system module, fs. For the most part, fs simply provides a wrapper for the standard file operations.
 */
var fs = require('fs');

var filename = process.argv[2];
var contents = fs.readFileSync(filename);
var str = contents.toString();
var lines = str.split('\n').length;

console.log(lines - 1);

// note you can avoid the .toString() by passing 'utf8' as the second argument to readFileSync, then you'll get a String!

// fs.readFileSync(process.argv[2], 'utf8').split('\n').length
