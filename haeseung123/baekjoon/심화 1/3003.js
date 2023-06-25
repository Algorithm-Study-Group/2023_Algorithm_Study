const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ')

const piece = [1, 1, 2, 2, 2, 8]
let answer = ''

for(let i=0; i<input.length; i++) {
    answer += piece[i]-input[i] + ' '
}

console.log(answer)
