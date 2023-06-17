let fs = require('fs');
let [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ')

a = a.split('').reverse().join('')
b = b.split('').reverse().join('')

console.log(Math.max(... [a,b]))