const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let a = 0;
let b = 0;
let max = 0;

for(let j = 0 ; j<9 ; j++) {
    let arr = data[j].split(' ');
    for(let i = 0; i<9 ; i++) {
        if(max<+arr[i]) {
            a = j;
            b = i;
            max = arr[i];
        }
    }
}

console.log(`${max}\n${a+1} ${b+1}`);