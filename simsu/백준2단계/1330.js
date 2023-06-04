const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().trim();
let [val1, val2] = data.split(' ');
if(Number(val1) > Number(val2)) console.log('>');
else if(Number(val1) < Number(val2)) console.log('<');
else console.log('==');