let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split(" ");
let result = 0;
input.forEach(num => {
    let n = Number(num.split("").reverse().join(""));
    if(result < n) result = n;
})
console.log(result);