let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let n = 0; n < input.length - 1; n++) {
	const c = input[n].split(' ');
	console.log(parseInt(c[0]) + parseInt(c[1]));
}