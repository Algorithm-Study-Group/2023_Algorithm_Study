const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().split('\n');
let arr = [...Array(100)].map(_ => Array(100).fill(0));

for(let i = 0 ; i < data[0] ; i++) {
    let [x, y] = data[i+1].split(' ');
    let x_ = +x+9 < 100 ? +x+9 : 100;
    let y_ = +y+9 < 100? +y+9 : 100;
    for(let a = +x-1 ; a < x_ ; a++) {
        for(let b = +y-1 ; b < y_ ; b++) {
            arr[a][b]=1;
        }
    }
}

let count = 0;

arr.forEach(ar => {
    ar.forEach(x => {
        if(x==1) count++;
    })
})

console.log(count);