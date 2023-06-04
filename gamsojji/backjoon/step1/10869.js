let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map(x => Number(x));

console.log(input[0]+input[1]);
console.log(input[0]-input[1]);
console.log(input[0]*input[1]);
console.log(parseInt(input[0]/input[1]));
console.log(input[0]%input[1]);