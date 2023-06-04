const fs = require('fs');
let data = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
let current = data[0].split(" ").map(x => Number(x));
let cooking_time = Number(data[1]);
console.log((current[0]+Math.floor((current[1]+cooking_time)/60))%24 + ' ' + (current[1]+cooking_time)%60);

