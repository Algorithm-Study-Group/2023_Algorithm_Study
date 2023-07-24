const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let x = []
let y = []

for(let i=0; i<input.length; i++) {
    let [a, b] = input[i].split(' ').map(v => +v)
    x.push(a)
    y.push(b)
}

x = x.sort((a,b) => a-b)
y = y.sort((a,b) => a-b)

x = x[0]===x[1] ? x[2] : x[0]
y = y[0]===y[1] ? y[2] : y[0]

console.log(x, y)