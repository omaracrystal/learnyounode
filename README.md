 » To print these instructions again, run: learnyounode print
 » To execute your program in a test environment, run: learnyounode run program.js
 » To verify your program, run: learnyounode verify program.js
 » For help run: learnyounode help

#LEARN YOU THE NODE.JS FOR MUCH WIN!
─────────────────────────────────────

#HELLO WORLD
#Exercise 1 of 13

Write a program that prints the text "HELLO WORLD" to the console (stdout).

## HINTS

To make a Node.js program, create a new file with a .js extension and start writing JavaScript! Execute your program by running it with the
node command. e.g.:

    $ node program.js

You can write to the console in the same way as in the browser:

    console.log("text")

When you are done, you must run:

    $ learnyounode verify program.js

to proceed. Your program will be tested, a report will be generated, and the lesson will be marked 'completed' if you are successful.

-------------------------------------------------------------------------------

#BABY STEPS
#Exercise 2 of 13

Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).

## HINTS

You can access command-line arguments via the global process object. The process object has an argv property which is an array containing the complete command-line. i.e. process.argv.

To get started, write a program that simply contains:

    console.log(process.argv)

Run it with node program.js and some numbers as arguments. e.g:

    $ node program.js 1 2 3

In which case the output would be an array looking something like:

    [ 'node', '/path/to/your/program.js', '1', '2', '3' ]

You'll need to think about how to loop through the number arguments so  you can output just their sum. The first element of the process.argv array is always 'node', and the second element is always the path to your program.js file, so you need to start at the 3rd element (index 2), adding each item to the total until you reach the end of the array.

Also be aware that all elements of process.argv are strings and you may need to coerce them into numbers. You can do this by prefixing the property with + or passing it to Number(). e.g. +process.argv[2] or Number(process.argv[2]).

learnyounode will be supplying arguments to your program when you run learnyounode verify program.js so you don't need to supply them yourself. To test your program without verifying it, you can invoke it with learnyounode run program.js. When you use run, you are invoking the test environment that learnyounode sets up for each exercise.
-------------------------------------------------------------------------------

#MY FIRST I/O!
#Exercise 3 of 13

Write a program that uses a single synchronous filesystem operation to read a file and print the number of newlines (\n) it contains to the console (stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first command-line argument. You do not need to make your own test file.

## HINTS

To perform a filesystem operation you are going to need the fs module from the Node core library. To load this kind of module, or any other "global" module, use the following incantation:

    var fs = require('fs')

Now you have the full fs module available in a variable named fs.

All synchronous (or blocking) filesystem methods in the fs module end with 'Sync'. To read a file, you'll need to use fs.readFileSync('/path/to/file'). This method will return a Buffer object containing the complete contents of the file.

Documentation on the fs module can be found by pointing your browser here:
  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html

Buffer objects are Node's way of efficiently representing arbitrary arrays of data, whether it be ascii, binary or some other format. Buffer objects can be converted to strings by simply calling the toString() method on them. e.g. var str = buf.toString().

Documentation on Buffers can be found by pointing your browser here:
  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/buffer.html

If you're looking for an easy way to count the number of newlines in a string, recall that a JavaScript String can be .split() into an array of substrings and that '\n' can be used as a delimiter. Note that the test file does not have a newline character ('\n') at the end of the last line, so using this method you'll end up with an array that has one more element than the number of newlines.

-------------------------------------------------------------------------------

#MY FIRST ASYNC I/O!
#Exercise 4 of 13

Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout), similar to running cat file | wc -l.

The full path to the file to read will be provided as the first command-line argument.

# HINTS

The solution to this problem is almost the same as the previous problem except you must now do it the Node.js way: asynchronous.

Instead of fs.readFileSync() you will want to use fs.readFile() and instead of using the return value of this method you need to collect the value from a callback function that you pass in as the second argument. To learn more about callbacks, check out: [https://github.com/maxogden/art-of-node#callbacks](https://github.com/maxogden/art-of-node#callbacks).

Remember that idiomatic Node.js callbacks normally have the signature:

    function callback (err, data) { /* ... */ }

so you can check if an error occurred by checking whether the first argument is truthy. If there is no error, you should have your Buffer object as the second argument. As with readFileSync(), you can supply 'utf8' as the second argument and put the callback as the third argument and you will get a String instead of a Buffer.

Documentation on the fs module can be found by pointing your browser here:
  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html
-------------------------------------------------------------------------------

#FILTERED LS
#Exercise 5 of 13

Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt. Note that the second argument will not come prefixed with a '.'.

The list of files should be printed to the console, one file per line. You must use asynchronous I/O.


## HINTS

The fs.readdir() method takes a pathname as its first argument and a callback as its second. The callback signature is:

    function callback (err, list) { /* ... */ }

where list is an array of filename strings.

Documentation on the fs module can be found by pointing your browser here:
  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/fs.html

You may also find node's path module helpful, particularly the extname method.

Documentation on the path module can be found by pointing your browser here:
  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/path.html

-------------------------------------------------------------------------------

#MAKE IT MODULAR
#Exercise 6 of 13

This problem is the same as the previous but introduces the concept of modules. You will need to create two files to solve this.

Create a program that prints a list of files in a given directory, filtered by the extension of the files. The first argument is the directory name and the second argument is the extension filter. Print the list of files (one file per line) to the console. You must use asynchronous I/O.

You must write a module file to do most of the work. The module must export a single function that takes three arguments: the directory name, the filename extension string and a callback function, in that order. The filename extension argument must be the same as what was passed to your program. Don't turn it into a RegExp or prefix with "." or do anything except pass it to your module where you can do what you need to make your filter work.

The callback function must be called using the idiomatic node(err, data) convention. This convention stipulates that unless there's an error, the first argument passed to the callback will be null, and the second will be your data. In this exercise, the data will be your filtered list of files, as an Array. If you receive an error, e.g. from your call to  fs.readdir(), the callback must be called with the error, and only the error, as the first argument.

You must not print directly to the console from your module file, only from your original program.

In the case of an error bubbling up to your original program file, simply check for it and print an informative message to the console.

These four things are the contract that your module must follow.

  * Export a single function that takes exactly the arguments described.
  * Call the callback exactly once with an error or some data as described.
  * Don't change anything else, like global variables or stdout.
  * Handle all the errors that may occur and pass them to the callback.

The benefit of having a contract is that your module can be used by anyone who expects this contract. So your module could be used by anyone else who does learnyounode, or the verifier, and just work.


## HINTS

Create a new module by creating a new file that just contains your directory reading and filtering function. To define a single function export, you assign your function to the module.exports object, overwriting what is already there:

    module.exports = function (args) { /* ... */ }

Or you can use a named function and assign the name.

To use your new module in your original program file, use the require() call in the same way that you require('fs') to load the fs module. The only difference is that for local modules must be prefixed with './'. So, if your file is named mymodule.js then:

    var mymodule = require('./mymodule.js')

The '.js' is optional here and you will often see it omitted.

You now have the module.exports object in your module assigned to the mymodule variable. Since you are exporting a single function, mymodule is a function you can call!

Also keep in mind that it is idiomatic to check for errors and do early-returns within callback functions:

    function bar (callback) {
      foo(function (err, data) {
        if (err)
          return callback(err) // early return

        // ... no error, continue doing cool things with `data`

        // all went well, call callback with `null` for the error argument

        callback(null, data)
      })
    }


-------------------------------------------------------------------------------

#HTTP CLIENT
#Exercise 7 of 13

Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Write the String contents of each "data" event from the response to a new line on the console (stdout).

## HINTS

For this exercise you will need to use the http core module.

Documentation on the http module can be found by pointing your browser here:
  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html

The http.get() method is a shortcut for simple GET requests, use it to simplify your solution. The first argument to http.get() can be the URL you want to GET; provide a callback as the second argument.

Unlike other callback functions, this one has the signature:

    function callback (response) { /* ... */ }

Where the response object is a Node Stream object. You can treat Node Streams as objects that emit events. The three events that are of most interest are: "data", "error" and "end". You listen to an event like so:

    response.on("data", function (data) { /* ... */ })

The "data" event is emitted when a chunk of data is available and can be processed. The size of the chunk depends upon the underlying data source.

The response object / Stream that you get from http.get() also has a setEncoding() method. If you call this method with "utf8", the "data" events will emit Strings rather than the standard Node Buffer objects which you have to explicitly convert to Strings.


-------------------------------------------------------------------------------

#HTTP COLLECT
#Exercise 8 of 13

Write a program that performs an HTTP GET request to a URL provided to you as the first command-line argument. Collect all data from the server (not just the first "data" event) and then write two lines to the console (stdout).

The first line you write should just be an integer representing the number of characters received from the server. The second line should contain the complete String of characters sent by the server.

## HINTS

There are two approaches you can take to this problem:

1) Collect data across multiple "data" events and append the results together prior to printing the output. Use the "end" event to determine when the stream is finished and you can write the output.

2) Use a third-party package to abstract the difficulties involved in collecting an entire stream of data. Two different packages provide a useful API for solving this problem (there are likely more!): bl (Buffer List) and concat-stream; take your pick!

  <http://npm.im/bl>
  <http://npm.im/concat-stream>

To install a Node package, use the Node Package Manager npm. Simply type:

    $ npm install bl

And it will download and install the latest version of the package into a subdirectory named node_modules. Any package in this subdirectory under your main program file can be loaded with the require syntax without being prefixed by './':

    var bl = require('bl')

Node will first look in the core modules and then in the node_modules directory where the package is located.

If you don't have an Internet connection, simply make a node_modules directory and copy the entire directory for the package you want to use from inside the learnyounode installation directory:

  file:///usr/local/lib/node_modules/learnyounode/node_modules/bl
  file:///usr/local/lib/node_modules/learnyounode/node_modules/concat-stream

Both bl and concat-stream can have a stream piped in to them and they will collect the data for you. Once the stream has ended, a callback will be fired with the data:

    response.pipe(bl(function (err, data) { /* ... */ }))
    // or
    response.pipe(concatStream(function (data) { /* ... */ }))

Note that you will probably need to data.toString() to convert from a Buffer.

Documentation for both of these modules has been installed along with learnyounode on your system and you can read them by pointing your browser here:

  file:///usr/local/lib/node_modules/learnyounode/docs/bl.html
  file:///usr/local/lib/node_modules/learnyounode/docs/concat-stream.html



-------------------------------------------------------------------------------

#JUGGLING ASYNC
#Exercise 9 of 13

This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.

You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

## HINTS

Don't expect these three servers to play nicely! They are not going to give you complete responses in the order you hope, so you can't naively just print the output as you get it because they will be out of order.

You will need to queue the results and keep track of how many of the URLs have returned their entire contents. Only once you have them all, you can print the data to the console.

Counting callbacks is one of the fundamental ways of managing async in Node. Rather than doing it yourself, you may find it more convenient to rely on a third-party library such as [async](http://npm.im/async) or [after](http://npm.im/after). But for this exercise, try and do it without any external helper library.


-------------------------------------------------------------------------------

#TIME SERVER
#Exercise 10 of 13

Write a TCP time server!

Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & 24 hour time in the format:

    "YYYY-MM-DD hh:mm"

followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:

    "2013-07-06 17:42"

## HINTS

For this exercise we'll be creating a raw TCP server. There's no HTTP involved here so we need to use the net module from Node core which has all the basic networking functions.

The net module has a method named net.createServer() that takes a callback function. Unlike most callbacks in Node, the callback used by createServer() is called more than once. Every connection received by your server triggers another call to the callback. The callback function has the signature:

    function callback (socket) { /* ... */ }

net.createServer() also returns an instance of your server. You must call server.listen(portNumber) to start listening on a particular port.

A typical Node TCP server looks like this:

    var net = require('net')
    var server = net.createServer(function (socket) {
      // socket handling logic
    })
    server.listen(8000)

Remember to use the port number supplied to you as the first command-line argument.

The socket object contains a lot of meta-data regarding the connection, but it is also a Node duplex Stream, in that it can be both read from, and written to. For this exercise we only need to write data and then close the socket.

Use socket.write(data) to write data to the socket and socket.end() to close the socket. Alternatively, the .end() method also takes a data object so you can simplify to just: socket.end(data).

Documentation on the net module can be found by pointing your browser here:

  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/net.html

To create the date, you'll need to create a custom format from a new Date() object. The methods that will be useful are:

    date.getFullYear()
    date.getMonth()     // starts at 0
    date.getDate()      // returns the day of month
    date.getHours()
    date.getMinutes()

Or, if you want to be adventurous, use the strftime package from npm. The strftime(fmt, date) function takes date formats just like the unix date command. You can read more about strftime at: [https://github.com/samsonjs/strftime](https://github.com/samsonjs/strftime)


-------------------------------------------------------------------------------

#HTTP FILE SERVER
#Exercise 11 of 13

Write an HTTP server that serves the same text file for each request it receives.

Your server should listen on the port provided by the first argument to your program.

You will be provided with the location of the file to serve as the second command-line argument. You must use the fs.createReadStream() method to stream the file contents to the response.

## HINTS

Because we need to create an HTTP server for this exercise rather than a generic TCP server, we should use the http module from Node core. Like the net module, http also has a method named http.createServer() but this one creates a server that can talk HTTP.

http.createServer() takes a callback that is called once for each connection received by your server. The callback function has the signature:

    function callback (request, response) { /* ... */ }

Where the two arguments are objects representing the HTTP request and the corresponding response for this request. request is used to fetch properties, such as the header and query-string from the request while response is for sending data to the client, both headers and body.

Both request and response are also Node streams! Which means that you can use the streaming abstractions to send and receive data if they suit your use-case.

http.createServer() also returns an instance of your server. You must call server.listen(portNumber) to start listening on a particular port.

A typical Node HTTP server looks like this:

    var http = require('http')
    var server = http.createServer(function (req, res) {
      // request handling logic...
    })
    server.listen(8000)

Documentation on the http module can be found by pointing your browser here:
  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/http.html

The fs core module also has some streaming APIs for files. You will need to use the fs.createReadStream() method to create a stream representing the file you are given as a command-line argument. The method returns a stream object which you can use src.pipe(dst) to pipe the data from the src stream to the dst stream. In this way you can connect a filesystem stream with an HTTP response stream.


-------------------------------------------------------------------------------

#HTTP UPPERCASERER
#Exercise 12 of 13

Write an HTTP server that receives only POST requests and converts incoming POST body characters to upper-case and returns it to the client.

Your server should listen on the port provided by the first argument to your program.

## HINTS

While you're not restricted to using the streaming capabilities of the request and response objects, it will be much easier if you do.

There are a number of different packages in npm that you can use to "transform" stream data as it's passing through. For this exercise the through2-map package offers the simplest API.

through2-map allows you to create a transform stream using only a single function that takes a chunk of data and returns a chunk of data. It's designed to work much like Array#map() but for streams:

    var map = require('through2-map')
    inStream.pipe(map(function (chunk) {
      return chunk.toString().split('').reverse().join('')
    })).pipe(outStream)

In the above example, the incoming data from inStream is converted to a String (if it isn't already), the characters are reversed and the result is passed through to outStream. So we've made a chunk character reverser! Remember though that the chunk size is determined up-stream and you have little control over it for incoming data.

To install through2-map type:

    $ npm install through2-map

If you don't have an Internet connection, simply make a node_modules directory and copy the entire directory for the module you want to use from inside the learnyounode installation directory:

  file:///usr/local/lib/node_modules/learnyounode/node_modules/through2-map

Documentation for through2-map has been installed along with learnyounode on your system and you can read them by pointing your browser here:

  file:///usr/local/lib/node_modules/learnyounode/docs/through2-map.html

-------------------------------------------------------------------------------
─────────────────────────────────────

#HTTP JSON API SERVER
#Exercise 13 of 13

Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.

For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:

    {
      "hour": 14,
      "minute": 23,
      "second": 15
    }

Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time in milliseconds (the number of milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'. For example:

    { "unixtime": 1376136615474 }

Your server should listen on the port provided by the first argument to your program.

## HINTS

The request object from an HTTP server has a url property that you will need to use to "route" your requests for the two endpoints.

You can parse the URL and query string using the Node core 'url' module. url.parse(request.url, true) will parse content of request.url and provide you with an object with helpful properties.

For example, on the command prompt, type:

    $ node -pe "require('url').parse('/test?q=1', true)"

Documentation on the url module can be found by pointing your browser here:
  file:///usr/local/lib/node_modules/learnyounode/node_apidoc/url.html

Your response should be in a JSON string format. Look at JSON.stringify() for more information.

You should also be a good web citizen and set the Content-Type properly:

    res.writeHead(200, { 'Content-Type': 'application/json' })

The JavaScript Date object can print dates in ISO format, e.g. new Date().toISOString(). It can also parse this format if you pass the string into the Date constructor. Date#getTime() will also
come in handy.
