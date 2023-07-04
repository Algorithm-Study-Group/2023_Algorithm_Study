const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().split('\n');
const max = Math.max(...data.map(x => x.length));
let answer = '';
let i = 0;
let j = 0;

while(j<=max) {
    answer +=  data[i][j] == undefined ? '' : data[i][j];
    i++;
    if(i==5) {
        i=0;
        j++;
    }
}

console.log(answer);