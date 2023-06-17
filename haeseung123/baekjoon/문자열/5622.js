let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('')
let result = 0

const number = {2:'ABC', 3:'DEF', 4:'GHI', 5:'JKL', 6:'MNO', 7:'PQRS', 8:'TUV', 9:'WXYZ'}

input.forEach(e => {
    for(let i=2; i<10; i++) {
        number[i].includes(e) ? result+= i+1 : false
    }
})

console.log(result)