let input = require('fs').readFileSync('/dev/stdin');

let number = 0, line = 0;

while(number < input){
	line++;
	number += line;
}

let index = number - input;

// console.log(number, input, line, index);

console.log((line - index) + "/" + (1 + index));