let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let num = input[0].split(' ')
let arr =input[1].split(' ').map(v => Number(v))
let result = ''

for(let i=0; i<arr.length; i++) {
    arr[i]< num[1] ? result+=arr[i] + ' ' : false
}

console.log(result)