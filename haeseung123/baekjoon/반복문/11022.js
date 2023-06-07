let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

for(let i=0; i<input.length; i++) {
    input[i] = input[i].toString().split(' ').map(v => Number(v))
    if(input[i].length > 1) {
      console.log('Case #'+i+':', input[i][0], '+', input[i][1],'=', input[i][0]+input[i][1])
    }
}
