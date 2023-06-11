let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let number = input[1].split(" ");
let count = 0;

for(let i = 0; i < input[0]; i++){
	if(number[i] == input[2])
		count++;
}

console.log(count);