let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let n = 0; n < input[0]; n++) {
	const c = input[n + 1].split(' ');
	console.log("Case #" + (n+1) + ": " + parseInt(c[0]) + " + " + parseInt(c[1]) + " = " + (parseInt(c[0]) + parseInt(c[1])));
}

