let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim()

let hap = 0;

for(let i = 1; i <= input; i++){
    hap += i;
}

console.log(hap);