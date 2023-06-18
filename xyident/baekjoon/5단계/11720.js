let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let sum = 0;
let num = input[1].split('');

for(let i = 0; i < input[0]; i++){
    sum += Number(num[i]);
}

console.log(sum);