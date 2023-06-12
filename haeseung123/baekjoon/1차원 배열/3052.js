let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => Number(v))

let result = input.map(e => e%42)
let answer = new Set(result)

console.log([... answer].length)