const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(data);
console.log((n*n+n)/2);