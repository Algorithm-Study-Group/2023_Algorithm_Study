let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim();
let result = 0;
for (let i = 1; i <= parseInt(input); i++) {
    result+= i;
}
console.log(result);