// 방법 1

const fs = require('fs');
let data = fs.readFileSync('/dev/stdin').toString().trim();
console.log(data == data.split('').reverse().join('') ? 1 : 0);

/* 방법 2
let half = Math.floor(data.length/2)-1;
for(let i = half ; i >= 0  ; i--) {
    if(data[i] != data[data.length-i-1]) return console.log("0");
}
console.log("1");
*/
