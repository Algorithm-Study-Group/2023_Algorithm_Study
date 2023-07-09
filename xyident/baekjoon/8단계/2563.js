let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let num = input[0];
let divider = input[1];

let answer = parseInt(num, Number(divider));

console.log(answer);