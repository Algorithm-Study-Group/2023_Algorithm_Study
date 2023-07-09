let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let num = fs.readFileSync(filePath).toString().trim();
const result = (2 ** num + 1) ** 2;
console.log(result);