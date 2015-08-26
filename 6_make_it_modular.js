//make-modular.js
var moduleFile = require('./6_make_it_modular2');

moduleFile(process.argv[2], process.argv[3], function(err, data){
    data.forEach(function(file){
        console.log(file);
    });
});


/*
in node it's convention that if there's an error, it's the first argument to the callback, and any additional arguments (anything but the first argument) are data.
 */


/*
module.exports =  function() {};

module.exports =  FindFilesByExtension;

function FindFilesByExtension(path, ext, callback) {
    //your code
}
 */
