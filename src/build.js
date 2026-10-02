const fs=require('fs');let h=fs.readFileSync('app2.src.html','utf8');
const lib=fs.readFileSync('node_modules/exceljs/dist/exceljs.min.js','utf8').replace(/<\/script/gi,'<\\/script');
fs.writeFileSync('EV_Report_Builder.html',h.replace('/*EXCELJS*/',()=>lib));
