const pdfK = require('pdfkit');
const fs = require('fs');
const xlsx = require('node-xlsx');

let pdf = new pdfK;
let textContent = '雷格西价格签';

pdf.pipe(fs.createWriteStream('test2.pdf'));



pdf.addPage();

pdf.text(textContent,0,0);

pdf.addPage();

pdf.text(textContent,0,0);

// pdf.save()
//     .moveTo(100, 150)
//     .lineTo(100, 250)
//     .lineTo(200, 250)
//     .fill("#FF3300");
// pdf.scale(0.6)
//     .translate(470, -380)
//     .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
//     .fill('red', 'even-odd')
//     .restore();
//
// pdf.addPage()
//     .fillColor("blue")
//     .text('Here is a link!', 100, 100)
//     .link(100, 100, 160, 27, 'http://google.com/');

pdf.end();

// 29.7cm
// 20.996cm