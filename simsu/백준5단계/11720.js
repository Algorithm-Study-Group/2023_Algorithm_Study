const fs = require('fs');
let str = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = 0;
for(let i=0; i<str[0]; i++) answer += +str[1][i];
console.log(answer);