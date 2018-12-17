const pdfMakePrinter = require('pdfmake/src/printer');
var path = require('path');


function generatePdf(docDefinition, callback)  {
  try {
    const fontDescriptors = {
        Roboto: {
          normal: 'fonts/Roboto-Regular.ttf',
          bold: 'fonts/Roboto-Medium.ttf',
          italics: 'fonts/Roboto-Italic.ttf',
          bolditalics: 'fonts/Roboto-Italic.ttf',
        }
      };
    const printer = new pdfMakePrinter(fontDescriptors);
    const doc = printer.createPdfKitDocument(docDefinition);
    
    let chunks = [];

    doc.on('data', (chunk) => {
      chunks.push(chunk);
    });
  
    doc.on('end', () => {
      const result = Buffer.concat(chunks);
      callback('data:application/pdf;base64,' + result.toString('base64'));
    });
    
    doc.end();
    
  } catch(err) {
    throw(err);
  }
};

module.exports = generatePdf;