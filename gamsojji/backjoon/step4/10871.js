let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let result = [];
input[1].split(" ").map(Number).forEach(element => {
    if(element < Number(input[0].split(" ").map(Number)[1])){
        result.push(element)
    }
});
console.log(...result);
