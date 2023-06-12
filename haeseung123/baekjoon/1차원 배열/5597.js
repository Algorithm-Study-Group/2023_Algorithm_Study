let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n').map(v => Number(v))
let result = ''

for(let i=1; i<=30; i++) {
    input.includes(i) ? false : result += i + '\n'
}

console.log(result)