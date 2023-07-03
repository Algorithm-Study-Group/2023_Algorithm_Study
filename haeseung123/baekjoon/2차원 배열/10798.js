const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const maxLength = Math.max(... input.map(v => v.length))

let answer = ''

for(let i=0; i<maxLength; i++) {
    for(let j=0; j<input.length; j++) {
        input[j][i] === undefined ? '' : answer+=input[j][i]
    }
}

console.log(answer)