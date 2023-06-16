const fs = require('fs');

const problem = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let init = problem[0].split(' ');
let arr = new Array(Number(init[0])).fill(0);

for(let a = 1 ; a <= init[1] ; a++) {
    let [i, j, k] = problem[a].split(' ');
    for(let b = i-1 ; b < j ; b++) {
        arr[b] = +k;
    }
}
console.log(arr.join(' '));