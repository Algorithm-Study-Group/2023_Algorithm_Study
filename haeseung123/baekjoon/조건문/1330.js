let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(x => Number(x))

let [a, b] = input

if(a>b) console.log('>')
else if (a<b) console.log('<')
else if (a===b) console.log('==')
