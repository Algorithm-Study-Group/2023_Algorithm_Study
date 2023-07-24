const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i=0; i<input.length-1; i++) {
    const [a, b] = input[i].split(' ')

    if(a%b===0) console.log('multiple')
    else if(b%a===0) console.log('factor')
    else console.log('neither')
}