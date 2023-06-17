const fs = require('fs');
const problem = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = new Set();

for(let i = 0; i <10; i++) {
    arr.add(problem[i]%42);
}
console.log(arr.size);