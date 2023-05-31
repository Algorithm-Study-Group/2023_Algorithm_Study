let fs = require('fs')
let input = fs.readFileSync('예제.txt').toString().split(' ').map(x => Number(x))

let [A, B, C] = input 

console.log((A+B)%C)
console.log(((A%C) + (B%C))%C)
console.log((A*B)%C)
console.log(((A%C) * (B%C))%C)
