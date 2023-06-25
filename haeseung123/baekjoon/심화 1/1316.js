const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

let result = 0

for(let i=1; i<input.length; i++) {
    let tmp = ''

    for(let j=0; j<input[i].length; j++) {
        if(!tmp.includes(input[i][j])) {
            tmp+=input[i][j]
        }
        else {
            if(tmp[tmp.length-1]!==input[i][j]) {
                result++
                break
            }
        }
    }
}
console.log(input[0]-result)