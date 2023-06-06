const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().split('\n');
let answer = '';
data.forEach(val => {
    const sum = val.split(' ').reduce((x,y) => Number(x)+Number(y));
    answer+=sum+'\n';
})
console.log(answer.trimEnd());