let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')
let result = 0

for(let i=0; i<input.length; i++) {
    input[i] = input[i].split(' ').map(v => Number(v))
   
    result = input[i][0]+input[i][1]
    if(!result) break

    console.log(result)
}
