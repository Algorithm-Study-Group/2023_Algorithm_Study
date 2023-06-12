let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let arr = input[1].split(' ').map(v => +v)
let max = Math.max( ...arr)
let sum = 0
console.log(max)

for(let i=0; i<arr.length; i++) {
    console.log(arr[i])
    sum += arr[i]/max*100
}
console.log(sum/arr.length)

