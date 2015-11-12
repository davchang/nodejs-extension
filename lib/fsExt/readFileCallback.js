var fs = require('fs');
var dirPath = './data/mock-data';

var files = fs.readdirSync(dirPath);

files.forEach(function(file) {
    console.log('filename=' + file);
    fs.readFile(dirPath + '/' + file, 'utf8', function(err, data){
        if (err) {console.trace(err);}
        console.log("file", file);
        console.log(data.substr(0, 20));
    });
});
console.log("done");


