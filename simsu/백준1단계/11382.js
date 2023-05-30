const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().trim();
let [val1, val2, val3] = data.split(' ');
console.log(Number(val1) + Number(val2) + Number(val3));