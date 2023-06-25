let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("");
let result = 1;
for(let i = 0; i < parseInt(input.length/2); i++){
    input[i] ===  input[input.length-1-i]? 0 : result = 0;
}
console.log(result)