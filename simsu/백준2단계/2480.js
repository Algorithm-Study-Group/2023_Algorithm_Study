const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().trim();
let val = data.split(' ').map(x => Number(x));
let count = 0;
let num = 0;
for(let i = 0 ; i < 3 ; i++) {
    let prev_count = 0;
    let prev_num = 0;
    for(let j = 0 ; j < 3 ; j++) {
        if(val[i]==val[j]) {
            prev_count++;
            prev_num = val[i];
        }
    }
    if(count < prev_count) {
        count = prev_count;
        num = prev_num;
    }
}
if(count==3) {
    console.log(10000 + 1000*num);
}
else if(count==2) {
    console.log(1000 + 100*num);
} else {
    console.log(100*Math.max(...val));
}