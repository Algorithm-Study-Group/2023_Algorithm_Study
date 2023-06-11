let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let number = input[0].split(" ");
let data = input[0].split(" ");

result = '';

for (let i = 0; i < number[0]; i++) {
  if (Number(numbers[i]) < number[1]) {
    result += data[i] + ' ';
  }
}

console.log(text);