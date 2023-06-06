const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = '';
for(let i = 1 ; i<= +data[0] ; i++) {
    const [a, b] = data[i].split(' ');
    answer += `Case #${i}: ${Number(a)+Number(b)}\n`;
}
console.log(answer.trimEnd());