let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let result = ''

for(let i=1; i<=input[0]; i++) {
    let [a, b] = input[i].split(' ')

    for(let j=0; j<b.length; j++) {
        result += b[j].repeat(a)
    }
    result+= '\n'
}

console.log(result)