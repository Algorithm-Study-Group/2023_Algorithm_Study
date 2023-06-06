let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let text = '';

for(let i = 1; i <= input; i++){
	for(let k = 1; k <= input - i; k++){
		text += ' ';
	}
	for(let j = 1; j <= i; j++){
    	text += '*';
    }
	text += '\n';
}

console.log(text);