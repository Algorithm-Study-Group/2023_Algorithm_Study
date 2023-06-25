const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const grade = {'A+':4.5, 'A0':4.0, 'B+':3.5, 'B0':3.0 , 'C+':2.5, 'C0':2.0, 'D+':1.5, 'D0':1.0, 'F':0}

let result = 0
let sum = 0
let answer = 0

for(let i=0; i<input.length; i++) {
    let [subject, a, b] = input[i].split(' ')
    if(b!=='P') {
        result+=a*grade[b]
        sum+=Number(a)
    }
}
answer = result/sum
console.log(answer.toFixed(6))