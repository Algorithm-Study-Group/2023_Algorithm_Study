let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let [num, zin] = fs.readFileSync(filePath).toString().trim().split(" ").map(Number);

console.log(num.toString(zin).toUpperCase())
