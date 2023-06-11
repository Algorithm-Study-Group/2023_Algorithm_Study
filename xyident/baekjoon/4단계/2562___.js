let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let index = 0;
let max = 0;

for(let i = 0; i < 9; i++){
    if(input[i] > max){
        index = i;
        max = input[i];
    }
}

console.log(max);
console.log(index + 1);