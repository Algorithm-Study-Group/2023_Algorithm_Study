const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v)

let divisors = []

for(let i=1; i<=Math.sqrt(input[0]); i++) {
    if(input[0]%i===0) {
        divisors.push(i)
        if(input[0]/i!==i) {
            divisors.push(input[0]/i)
        }
    }
}

divisors = divisors.sort((a,b) => a-b)

if(divisors.length<input[1]) console.log(0)
else console.log(divisors[input[1]-1])