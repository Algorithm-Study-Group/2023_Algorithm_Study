const fs = require('fs');

const data = fs.readFileSync('./test.txt').toString().trim().split('\n');
const answer = data[1].split(' ').map(x => {
    for(let i=2 ; i<x ; i++) if(x%i==0) return false;
    if(x!=1) return true;
    return false;
})

console.log(answer.filter(x=>x).length);