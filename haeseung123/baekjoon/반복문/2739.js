let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ').map(v => Number(v))
for(let i=1; i<10; i++) {
    console.log(input[0] + ' * ' + i + ' = ' + input[0]*i)
}
