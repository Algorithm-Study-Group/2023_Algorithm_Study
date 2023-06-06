let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().split('\n');

for (let n = 0; n < input[0]; n++) {
	const c = input[n + 1].split(' ');
	console.log(parseInt(c[0]) + parseInt(c[1]));
}

