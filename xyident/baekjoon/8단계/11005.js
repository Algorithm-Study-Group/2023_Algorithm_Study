let input = require('fs').readFileSync('/dev/stdin').toString().split(' ').map((item) => Number(item));
let num = input[0];
let divider = input[1];

let answer = num.toString(divider).toUpperCase();

console.log(answer);