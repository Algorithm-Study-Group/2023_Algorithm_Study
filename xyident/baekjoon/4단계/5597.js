let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

let number = input.sort((a, b) => a - b);

let answer = [];

for(let i = 1; i <= 30; i++){
  if(!number.includes(i))
    answer.push(i);
}

console.log(answer.join("\n"));