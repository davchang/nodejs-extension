var Promise = require('bluebird');
var fsPromise = Promise.promisifyAll(require('fs'));
var dirPath = './data/mock-data';

fsPromise.readdirAsync(dirPath)
    .then(function(files){
        files.forEach(function(file) {
            console.log('filename=' + file);
            fsPromise.readFileAsync(dirPath + '/' + file, 'utf8')
                .then(function(content){
                    console.log("file", file);
                    console.log(content.substr(0, 20));
                })
                .catch(function(error){
                    console.trace(error);
                });
        });
    })
    .catch(function(error){
        console.trace(error);
    });

console.log("done");


