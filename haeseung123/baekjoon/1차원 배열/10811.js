let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let baskets = []
let [n, m] = input[0].split(' ').map(v => Number(v))

for(let i=1; i<=n; i++) {
    baskets.push(i)
}

for(let j=1; j<=m; j++) {
    let [a, b] = input[j].split(' ').map(v => +v)
    let tmp = []

    for(let k=a-1; k<b; k++) {
        tmp.push(baskets[k])
    }
    tmp.reverse()
    baskets.splice(a-1, b-a+1, ...tmp)
}
console.log(baskets.join(' '))