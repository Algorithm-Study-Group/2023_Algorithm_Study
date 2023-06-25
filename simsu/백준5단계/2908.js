const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let num1 = Number([...data[0]].reverse().join(''));
let num2 = Number([...data[1]].reverse().join(''));
console.log(num1>num2 ? num1 : num2);