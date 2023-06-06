let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => Number(v))
let n = input[0] / 4
let result = ''

for(let i=1; i<=n; i++) result += 'long '

console.log(result+'int')
