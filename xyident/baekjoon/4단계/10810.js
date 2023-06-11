let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [n, m] = input[0].split(" ").map(Number);

const arr = new Array(n).fill(0);

for(let i = 1; i <= m; i++){

  let [s, e, n] = input[i].split(" ").map(Number);

  for(let j = s-1; j < e; j++){
    arr[j] = n;
  }
}

console.log(arr.join(" "));