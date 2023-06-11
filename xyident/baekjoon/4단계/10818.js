let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let numbers = input[1].split(" ");

let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log(min, max);