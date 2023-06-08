const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().split('\n')[1].split(' ');
let max = -1000000;
let min = 1000000;
for(let i = 0 ; i < data.length ; i++) {
    let di = Number(data[i]);
    if(di>max) max = data[i];
    if(di<min) min = data[i];
}
console.log(min, max);