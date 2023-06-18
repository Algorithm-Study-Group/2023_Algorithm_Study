let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let result = 0

input[0].split(' ').forEach(e => e!=='' ? result++ : false)

console.log(result)