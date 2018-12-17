var express = require('express');
var generatePdf = require('./generatePdfBase64');
fs = require('fs'),
app = express();

var cors = require('cors');

const docDefinition = {
    content: ['This will show up in the file created']
  };
  
 
  app.use(cors());
app.get('/pdf', function (req, res) {
var filePath = "/files/file.pdf";

fs.readFile(__dirname + filePath , function (err,data){
res.contentType("application/pdf");
res.send(data);
});
});

app.get('/pdf64', function (req, res) {
  
    
    generatePdf(docDefinition, (response) => {

        res.set('Content-Type', 'application/pdf');
        res.send(response); // sends a base64 encoded string to client
      });
    });


app.listen(process.env.PORT || 3000, '0.0.0.0' , function(){
console.log('Listening on 3000', process.env.PORT);
});