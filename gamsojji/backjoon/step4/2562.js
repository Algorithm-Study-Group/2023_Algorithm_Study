let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
let result = 0;

input.forEach(num => {
    result < num  ? result = num : 0;
});

console.log(result);
console.log(input.indexOf(result)+1);