const fs = require('fs');

const data = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let answer = data.map(x => {
    let a = Number(x.split(' ')[0]);
    let b = Number(x.split(' ')[1]);
    if(a==0 && b==0) return;
    if(b%a==0) return 'factor';
    else if(a%b==0) return 'multiple';
    else return 'neither';
})
console.log(answer.join('\n').trim());