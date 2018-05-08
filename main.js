const pdfK = require('pdfkit');
const fs = require('fs');
const xlsx = require('node-xlsx');

const ratio = 0.03527375;
let pdf = new pdfK({
    fontSize:12,
    size:[29.7/ratio,21/ratio]
});
// let textContent = '雷格西价格签';
let xlsxData = xlsx.parse('upload/a.xlsx');

let getData = xlsxData[0].data;
let num = getData.length;
let per = 5,total = 8,left = 10,top = 50,space = 5,space_left = 3;

pdf.pipe(fs.createWriteStream('test.pdf'));

for (let i = 1;i < num;i++ ){
    if (i%per === 0)
        pdf.addPage();
    for(let l = 0;l < total;l++ ){
        let textContent = getData[i][l];
        pdf.font('fonts/方正报宋简体.ttf')
            .text(textContent,left+space_left*l,top+l*50);
        console.log(i+"  "+l);
    }
    console.log("____"+i);
}
console.log('end');
pdf.end();