let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

for(let i=0; i<input.length; i++) {
    input[i] = input[i].split(' ').map(v => Number(v))
    if(input[i][0]===0 && input[i][1]===0) break
        
    console.log(input[i][0]+input[i][1])
}
