let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let nums = fs.readFileSync(filePath).toString().trim().split('\n').map(Number).map(n => n%42);
console.log([...new Set(nums)].length);