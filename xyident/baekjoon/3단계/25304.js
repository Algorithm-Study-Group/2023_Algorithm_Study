let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const amount = +input.shift()
const cnt = +input.shift()
let sum = 0

for(let i = 0; i<cnt; i++){
    const [a, b] = input[i].split(' ').map(Number)
    sum += a * b
}

if(amount === sum){
    console.log("Yes")
} else {
    console.log("No")
}