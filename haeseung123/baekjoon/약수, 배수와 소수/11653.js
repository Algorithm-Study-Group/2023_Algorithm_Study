const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(v => +v)

let n = input[0]
let idx = 2
let arr = []

while(n != 1) {
    if(n%idx===0) {
        console.log(idx)
        n = n/idx
        idx = 2
    }
    else idx++
}