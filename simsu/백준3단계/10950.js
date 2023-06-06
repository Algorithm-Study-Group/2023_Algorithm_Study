const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const t = Number(data[0]);
for(let i = 1 ; i <= t ; i++) {
    const [a, b] = data[i].split(' ');
    console.log(Number(a) + Number(b));
}