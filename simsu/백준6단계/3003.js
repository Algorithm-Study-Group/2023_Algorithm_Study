const fs = require('fs');
let chess = fs.readFileSync('/dev/stdin').toString().split(' ');
let correct = [1,1,2,2,2,8];

for(let i = 0 ; i< chess.length ; i++) {
    if(chess[i] != correct[i]) correct[i] = correct[i]-(+chess[i]);
    else correct[i] = 0;
}

console.log(correct.join(' '));