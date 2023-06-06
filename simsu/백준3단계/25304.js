const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const n = Number(data[1]);
let calc_sum = 0;
for(let i = 2 ; i < n+2 ; i++) {
    const [price, number] = data[i].split(' ');
    calc_sum += Number(price) * Number(number);
}
console.log(calc_sum == Number(data[0]) ? 'Yes' : 'No');