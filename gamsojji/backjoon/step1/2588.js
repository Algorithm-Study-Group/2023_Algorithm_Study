let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().split("\n").map(x => Number(x));

console.log(input[0]*(input[1]%10));
console.log(input[0]*(input[1]%100-input[1]%10)/10);
console.log(input[0]*(parseInt(input[1]/100)));
console.log(input[0]*input[1]);