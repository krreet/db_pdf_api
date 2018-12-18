var express = require('express');
var generatePdf = require('./generatePdfBase64');
fs = require('fs'),
app = express();

var cors = require('cors');

const docDefinition = {
    content: [
        // if you don't need styles, you can use a simple string to define a paragraph
        'This is a Pdf created and will be sent as base 64',
   
        // using a { text: '...' } object lets you set styling properties
        { text: 'This paragraph will have a bigger font', fontSize: 15 },
   
        // if you set pass an array instead of a string, you'll be able
        // to style any fragment individually
        {
          text: [
            'This paragraph is defined as an array of elements to make it possible to ',
            { text: 'restyle part of it and make it bigger ', fontSize: 15 },
            'than the rest.'
          ]
        }
      ]
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

      
        res.send(response); // sends a base64 encoded string to client
      });
    });


app.listen(process.env.PORT || 3000, '0.0.0.0' , function(){
console.log('Listening on 3000', process.env.PORT);
});