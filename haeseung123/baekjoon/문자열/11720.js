let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

console.log(input[1].split('').map(v => +v).reduce((a,c) => a+=c))