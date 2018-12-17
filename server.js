var express = require('express'),
fs = require('fs'),
app = express();

app.get('/pdf', function (req, res) {
var filePath = "/files/file.pdf";

fs.readFile(__dirname + filePath , function (err,data){
res.contentType("application/pdf");
res.send(data);
});
});

app.listen(3000, function(){
console.log('Listening on 3000');
});