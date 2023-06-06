let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => Number(v))
let answer = 0

for(let i=1; i<=input[0]; i++) {
    answer += i
}

console.log(answer)
