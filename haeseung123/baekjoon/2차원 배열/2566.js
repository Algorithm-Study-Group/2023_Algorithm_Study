const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
let maxArr = []

for(let i=0; i<input.length; i++) {
    input[i] = input[i].split(' ').map(v => +v)
    maxArr.push(Math.max(... input[i]))
}

const max = Math.max(... maxArr)
const row = maxArr.indexOf(max)
const col = input[row].indexOf(max)

console.log(max)
console.log(row+1, col+1)