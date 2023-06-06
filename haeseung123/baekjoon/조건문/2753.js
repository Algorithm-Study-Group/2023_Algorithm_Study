let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(x => Number(x))

let [a] = input

if(a%4==0 && a%100!=0) console.log('1')
else if(a%400==0) console.log('1')
else console.log('0')
