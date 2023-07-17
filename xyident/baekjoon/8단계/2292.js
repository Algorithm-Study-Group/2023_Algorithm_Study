let input = require('fs').readFileSync('/dev/stdin');

let line = 1, block = 1;

while (block < input) {    
  block += 6 * line;
  line++;
}

console.log(line);