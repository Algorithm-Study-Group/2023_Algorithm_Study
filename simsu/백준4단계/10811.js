const fs = require('fs');
const inp = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [bucket, loop] = inp[0].split(' ');
let arr = Array.from({length: Number(bucket)}, (v, i) => i+1);
for(let i=1 ; i<=loop; i++) {
    let range = inp[i].split(' ');
    let sub_arr = arr.slice(range[0]-1, range[1]).reverse();
    arr.splice(range[0]-1, range[1]-range[0]+1, ...sub_arr);
}
console.log(arr.join(' '));