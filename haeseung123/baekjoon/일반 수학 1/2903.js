const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()

let dot = 2

for(let i=0; i<Number(input); i++) {
    dot += Math.pow(2, i)
}

console.log(Math.pow(dot, 2))