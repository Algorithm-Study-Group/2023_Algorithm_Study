const fs = require('fs');
const problem = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let init = problem[0].split(' ');
let arr = Array.from({length: Number(init[0])}, (v, i) => i+1);

for(let a = 1 ; a <= init[1] ; a++) {
    let [i, j] = problem[a].split(' ');
    let temp = arr[i-1];
    arr[i-1] = arr[j-1];
    arr[j-1] = temp;
}
console.log(arr.join(' '));