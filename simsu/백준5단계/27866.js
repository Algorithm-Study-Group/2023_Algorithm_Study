const fs = require('fs');
let score = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(score[0][score[1]-1]);