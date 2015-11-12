var Promise = require('bluebird');
var fs = require('fs');
var statPromise = Promise.promisify(fs.stat);
var readdirPromise = Promise.promisify(fs.readdir);
var readFilePromise = Promise.promisify(fs.readFile);
var dirPath = './data';

var readTree = function doReadTree(dirPath){
    readdirPromise(dirPath)
        .then(function(files) {
            console.log('files=', files);
            files.forEach(function (file) {
                var filePath = dirPath + '/' + file;
                console.log('filePath=', filePath);
                statPromise(filePath)
                    .then(function (stats) {

                        if (stats.nlink === 3 || stats.nlink === 4) {
                            console.log("dir", file);
                            doReadTree(filePath);
                        } else {
                            readFilePromise(filePath, 'utf8')
                                .then(function (content) {
                                    console.log("file", file);
                                    console.log(content.substr(0, 100));
                                })
                                .catch(function (error) {
                                    console.trace(error);
                                });
                        }
                    })
                    .catch(function (error) {
                        console.trace(error);
                    });
            })
        })
        .catch(function (error) {
            console.trace(error);
        });
};

readTree(dirPath);
console.log("done");