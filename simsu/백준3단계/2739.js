const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().trim();
const val = Number(data);
for(let i = 1 ; i <= 9 ; i++) console.log(`${val} * ${i} = ${val*i}`);