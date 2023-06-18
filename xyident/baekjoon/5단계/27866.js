let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let text = input[0];
let num = input[1];

console.log(text[num - 1]);