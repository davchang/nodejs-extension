var fs = require('fs');
var dirPath = './data';

var readTree = function doReadTree(dirPath){
    var files = fs.readdirSync(dirPath);
    files.forEach(function(file) {
        filePath = dirPath + '/' + file;

        console.log('path =' + file);
        if (fs.statSync(filePath).isDirectory()) {
            doReadTree(filePath);
        } else {
            fs.readFile(filePath, 'utf8', function (err, data) {
                if (err) {
                    console.trace(err);
                }
                console.log("file", file);
                console.log(data.substr(0, 100));
            });
        }
    })
};

readTree(dirPath);

console.log("done");