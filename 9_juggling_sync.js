/*
9 - This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.
You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.
 */


var http = require('http');
var fullString = '';
http.get(process.argv[2], function callback(response) {

    response.on('data', function(data) {
        fullString += data.toString();
    });
    response.on('end', function() {
        console.log(fullString);
        fullString = '';
        http.get(process.argv[3], function callback(response) {
            response.on('data', function(data) {
                fullString += data.toString();
            });
            response.on('end', function() {
                console.log(fullString);
                fullString = '';
                http.get(process.argv[4], function callback(response) {
                    response.on('data', function(data) {
                        fullString += data.toString();
                    });
                    response.on('end', function() {
                        console.log(fullString);
                    });
                });
            });
        });
    });
});
