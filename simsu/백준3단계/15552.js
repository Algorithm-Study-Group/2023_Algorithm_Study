const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(data[0]);
let answer = '';
for(let i = 1 ; i <= n ; i++) {
    const [a, b] = data[i].split(' ');
    answer += ((Number(a) + Number(b)).toString()+'\n');
}
console.log(answer.trim());