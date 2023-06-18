const fs = require('fs');
const problem = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = new Set();
for(let a = 0 ; a < 30 ; a++) {
    arr.add(Number(problem[a]));
}
for(let a = 1 ; a <= 30 ; a++) {
    if(!arr.has(a)) console.log(a);
}