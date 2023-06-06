let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let result = 0

for(let i=0; i<input.length; i++) {
    input[i] = input[i].split(' ').map(v => Number(v))
}

for(let j=2; j<2+input[1][0]; j++) {
    result += input[j][0] * input[j][1]
}

if(input[0][0]===result) console.log('Yes')
else console.log('No')
