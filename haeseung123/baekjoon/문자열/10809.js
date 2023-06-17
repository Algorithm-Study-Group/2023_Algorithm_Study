let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let result = ''

for(let i=97; i<123; i++) {
    result+= input[0].indexOf(String.fromCharCode(i))+' '
}

console.log(result)