var fs = require('fs');
var dirPath = './data';

var readTree = function doReadTree(dirPath){
    var files = fs.readdirSync(dirPath);
    files.forEach(function(file) {
        filePath = dirPath + '/' + file;

        if (fs.statSync(filePath).isDirectory()) {
            doReadTree(filePath);
        } else {
            var data = fs.readFileSync(filePath, 'utf8');
            console.log("file", file);
            console.log(data.substr(0, 100));
        }
    })
};

readTree(dirPath);

console.log("done");