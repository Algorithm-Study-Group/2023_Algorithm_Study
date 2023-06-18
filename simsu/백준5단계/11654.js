const fs = require('fs');
let str = fs.readFileSync('/dev/stdin').toString().trim();
console.log(str.charCodeAt(0));