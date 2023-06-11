let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(" ").map(Number);

const arr = new Array(n).fill(0);
for(let i = 0; i < n; i++){
  arr[i] = i+1;
}

for(let i = 1; i <= m; i++){
  let [first, second] = input[i].split(" ").map(Number);
  let space = arr[first-1];
  arr[first-1] = arr[second-1];
  arr[second-1] = space;
}

console.log(arr.join(" "));