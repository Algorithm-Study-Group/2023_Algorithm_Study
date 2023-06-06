let fs = require('fs')
let input = fs.readFileSync("/dev/stdin").toString().trim()

for(let i = 1; i < 10; i++){
    console.log(input + " * " + i + " = " + input*i);
}