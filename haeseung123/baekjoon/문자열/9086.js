let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

for(let i=1; i<=input[0]; i++) {
    console.log(input[i][0]+input[i][input[i].length-1])
}