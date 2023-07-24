const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v)

if(input[0]===1) console.log(4)
else console.log(3*input[0]+input[0])