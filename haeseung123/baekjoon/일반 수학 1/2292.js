const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()

let block = 1
let n = 1

while(block < Number(input)) {
    block += 6*n
    n++
}

console.log(n)

//규칙찾아내는 연습 필요