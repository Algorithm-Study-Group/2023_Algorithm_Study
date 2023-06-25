let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let [cnt,nums] = fs.readFileSync(filePath).toString().trim().split("\n");
let result = 0;
nums.split("").forEach(n => {
    result += Number(n)
})

console.log(result);