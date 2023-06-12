let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let [n, m] = input[0].split(' ').map(v => Number(v))

let baskets = new Array(n).fill(0)

for(let a=1; a<=m; a++) {
    let [i, j, k] = input[a].split(' ').map(v => Number(v))

    for(let b=i-1; b<j; b++) {
        baskets[b] = k
    }
}

console.log(baskets.join(' '))