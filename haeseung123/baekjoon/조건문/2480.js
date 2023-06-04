let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => Number(v))

let [A, B, C] = input.sort((a,b) => b-a)

if (A !== B && A !== C && B !== C) console.log(A * 100)
else if (A === B && B !== C) console.log(1000 + A * 100)
else if (B === C && C !== A) console.log(1000 + C * 100)
else if (C === A && A !== B) console.log(1000 + C * 100)
else console.log(10000 + A * 1000)
