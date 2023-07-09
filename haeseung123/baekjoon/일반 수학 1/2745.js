const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ')

console.log(parseInt(input[0], input[1]))

//채점 속도가 매우 느림