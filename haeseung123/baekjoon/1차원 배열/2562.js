let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(v => Number(v))
let arr = []
arr.push(Math.max(... input))
arr.push(input.indexOf(Math.max(... input))+1)
arr.forEach(e => console.log(e))