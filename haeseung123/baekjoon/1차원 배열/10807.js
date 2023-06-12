let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let arr = input[1].split(' ')
let result = 0

for(let i=0; i<arr.length; i++) {
    arr[i] === input[2] ? result++ : false
}

console.log(result)
