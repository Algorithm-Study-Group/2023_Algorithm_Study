const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().trim();
let [val1, val2] = data.split('\n');
let arr = [];
let i = 1;
for(let i = val2.length-1 ; i>=0 ;  i--) {
    val1 = Number(val1);
    let num_i = Number(val2[i]);
    arr.push(val1*num_i);
}
arr.push(
    arr.reduce((x,y) => {
        i *= 10;
        return x+(y*i);
    })
)
arr.forEach(x => console.log(x));