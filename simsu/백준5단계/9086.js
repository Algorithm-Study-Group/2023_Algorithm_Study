const fs = require('fs');
let str = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = '';
for(let i=1; i<=str[0]; i++) {
    answer += str[i][0] + str[i][str[i].length-1] + '\n';
}
console.log(answer);