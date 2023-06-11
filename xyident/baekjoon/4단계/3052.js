let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let some = input.map((a) => a % 42); 
let answer = new Set(some).size;

console.log(answer);