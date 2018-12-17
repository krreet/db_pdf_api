var express = require('express');
var path = require('path');

var app = express();

app.get('/downloadFile', function (req, res) {
   var file = path.join(__dirname+"/files", 'file.pdf');
   res.download(file, function (err) {
       if (err) {
           console.log("Error");
           console.log(err);
       } else {
           console.log("Success");
       }
   });
});

var server = app.listen(3000, function () {
   console.log('Listening on', server.address().port);
});