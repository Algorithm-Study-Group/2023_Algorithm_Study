let input = require('fs').readFileSync('/dev/stdin').toString().split('\n', ' ');

let max = Math.max(...input);
let index = input.indexOf(max);

let i = Math.ceil(index / 9);

console.log(max);
console.log(i, index - (9 * (i - 1)));