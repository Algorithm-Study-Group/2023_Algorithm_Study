const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

console.log(Number(input[0]).toString(input[1]).toUpperCase())

//채점 느림