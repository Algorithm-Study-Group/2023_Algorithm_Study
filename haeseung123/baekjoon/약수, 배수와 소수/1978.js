const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const arr = input[1].split(' ').map(v => +v)

const isPrime = (num) => {
    if(num===1) return false
    
    for(let i=2; i<=Math.floor(Math.sqrt(num)); i++) {
        if(num%i===0) return false
    }
    return true
}

console.log(arr.filter((v) => isPrime(v)).length)

//시간복잡도를 고려하여 에라토스테네스의 체 활용