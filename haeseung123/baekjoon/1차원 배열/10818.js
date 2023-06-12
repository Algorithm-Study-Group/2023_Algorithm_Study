let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let arr = input[1].split(' ').map(v => Number(v))
console.log(Math.min(... arr), Math.max(... arr))