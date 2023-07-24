const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)

const A = input[0]
const B = input[1]
const V = input[2]

console.log(Math.ceil((V-B)/(A-B)))