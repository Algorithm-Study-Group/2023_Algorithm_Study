const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().split(' ');
console.log(Number(data[0]).toString(data[1]).toUpperCase());