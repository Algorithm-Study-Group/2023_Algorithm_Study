const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().split('\n');
let count = [];
const x = Number(data[0].split(' ')[1]);
data[1].split(' ').forEach(num => {
    if(x>num) count.push(num);
})
console.log(count.join(' '));