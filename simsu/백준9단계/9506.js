const fs = require('fs');

const data = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let result = data.map( x => {
    if(x=='-1') return;
    let answer = [];
    for(let i = 1 ; i<x ; i++) if(x%i==0) answer.push(i);
    let perfect = answer.reduce((x, y) => x+y);
    if(perfect==x) {
        return `${x} = ${answer.join(' + ')}`;
    }
    else return `${x} is NOT perfect.`;
})

console.log(result.join('\n').trimEnd());