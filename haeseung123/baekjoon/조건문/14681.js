let fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split("\n").map(v => Number(v))

let [a, b] = input

if(a>0) {
    b>0 ? console.log('1') : console.log('4')
}
else if(a<0) {
    b>0 ? console.log('2') : console.log('3')
}
