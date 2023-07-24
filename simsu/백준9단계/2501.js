const fs = require('fs');

const data = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let count = 0;
for(let i = 1 ; i<=data[0] ; i++) {
    if(data[0]%i==0) count++;
    if(count==data[1]) { 
        console.log(i);
        return;
    }
}
console.log(0);