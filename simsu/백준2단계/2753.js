const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().trim();
let leap = Number(data);
if(leap%4==0 && (leap%100!=0 || leap%400==0)) console.log("1");
else console.log("0");