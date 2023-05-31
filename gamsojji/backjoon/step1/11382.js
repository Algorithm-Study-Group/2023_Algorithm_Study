let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().split(" ").map(x => Number(x));
console.log(input[0]+input[1]+input[2])