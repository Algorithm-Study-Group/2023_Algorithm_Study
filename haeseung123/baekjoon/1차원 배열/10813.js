let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let tmp = 0
let baskets = []

let [n, m] = input[0].split(' ').map(v => +v)

for(let i=1; i<=n; i++) {
    baskets.push(i)
}

for(let j=1; j<=m; j++) {
    let [a, b] = input[j].split(' ').map(v => +v)
    tmp = baskets[a-1]
    baskets[a-1] = baskets[b-1]
    baskets[b-1] = tmp
}

console.log(baskets.join(' '))


