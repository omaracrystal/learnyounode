//module-file.js
var path = require('path');
var fs = require('fs');

module.exports = function(pathFile, ext, callback){
    ext = '.' + ext;

    fs.readdir(pathFile, function(err, list){
        if (err){
            return callback(err);
        }

        var filtered=[];
        list.forEach(function(file){
            if(path.extname(file) === ext){
                filtered.push(file);
            }
        });
        return callback(null, filtered);
    });
};
