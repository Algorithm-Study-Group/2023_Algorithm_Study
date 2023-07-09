const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().trim();

let answer = 2;

for(let i = 0 ; i<data ; i++) {
    answer += 2**i;
}

console.log(answer**2);