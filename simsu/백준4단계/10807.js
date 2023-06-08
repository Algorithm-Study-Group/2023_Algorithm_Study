const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().split('\n');
let count = 0;
data[1].split(' ').forEach(x => {
    if(data[2]==x) count++
})
console.log(count);