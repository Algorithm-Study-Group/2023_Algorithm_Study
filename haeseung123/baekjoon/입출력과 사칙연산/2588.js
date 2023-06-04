let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n")

console.log(Number(input[0]*input[1][2]))
console.log(Number(input[0]*input[1][1]))
console.log(Number(input[0]*input[1][0]))
console.log(Number(input[0]*input[1]))
