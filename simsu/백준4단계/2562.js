const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let max = [0,0];
for(let i = 0 ; i <= 9 ; i++) {
    if(max[0]<Number(data[i])) {
        max[0]=data[i];
        max[1]=i+1;
    }
}
console.log(max[0] + '\n' + max[1]);