let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

for (let i = 1; i <= 9; i++) {
    console.log(input[0]+" * "+i+" = "+input[0]*i);
}