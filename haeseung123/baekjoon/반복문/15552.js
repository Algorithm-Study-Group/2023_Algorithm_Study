let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let answer = ''

for(let i=1; i<input.length; i++) {
    input[i] = input[i].split(' ').map(v => Number(v))
    if(input[i].length>1) answer += input[i][0]+input[i][1]+`\n`
}
console.log(answer)
