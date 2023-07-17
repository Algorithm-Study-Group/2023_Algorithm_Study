const fs = require('fs');
const [n, m] = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => +v)
let arr = []

const isPrime = (num) => {
    if(num===1) return false
    if(num===2) return true
    
    for(let i=2; i<=Math.ceil(Math.sqrt(num)); i++) {
        if(num%i===0) return false
    }
    return true
}

for(let i=n; i<=m; i++) {
    if(isPrime(i)) arr.push(i)
}

if(arr.length === 0) console.log(-1)
else {
    console.log(arr.reduce((a,c) => a+c))
    console.log(arr[0])
}