let input = require('fs').readFileSync('/dev/stdin').toString().trim();

const answer = (2 ** input + 1) ** 2;
console.log(answer);