let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split(" ");
let chess = [1, 1, 2, 2, 2, 8];
let result = [0,0,0,0,0, 0];

input.forEach((n, idx) => {
    result[idx] = chess[idx] - n;
})

console.log(...result)