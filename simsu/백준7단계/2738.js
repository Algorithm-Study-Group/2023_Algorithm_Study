const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = data[0].split(' ');
let arr = [...Array(+n)].map(_ => Array(+m).fill(0));

for(let i = 0 ; i< data.length-1; i++){
    let subarr = data[i+1].split(' ');
    for(let j = 0 ; j<m; j++) {
        arr[i%n][j] += +subarr[j];
    }
}

console.log(arr.map(x=> x.join(' ')).join('\n'));