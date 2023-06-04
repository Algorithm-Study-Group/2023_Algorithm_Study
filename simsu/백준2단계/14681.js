const fs = require('fs');
let data = fs.readFileSync(0).toString().trim();
let coordinate = data.split("\n").map(x => Number(x));
if(coordinate[0]>0) {
    if(coordinate[1]>0) console.log('1');
    else console.log('4');
} else {
    if(coordinate[1]>0) console.log('2');
    else console.log('3');
}