const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => +v)

for(let i=1; i<input.length; i++) {
    let money = input[i]
    let result = []
    const coins = [25, 10, 5, 1]

    for(let j=0; j<coins.length; j++) {
        result.push(Math.floor(money/coins[j]))
        money %= coins[j]
    }
    console.log(result.join(' '))
}