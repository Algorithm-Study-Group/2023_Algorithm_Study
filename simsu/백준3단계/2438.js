const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().trim();
const n = Number(data);
let answer = '';
for(let i = 1 ; i <= n ; i++) answer += ('*'.repeat(i) + '\n');
console.log(answer.trimEnd());