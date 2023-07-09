let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n").map(n => {return n.split("")});
let maxLength = 0;
let result = "";
input.forEach(n => {
    maxLength < n.length ? maxLength = n.length : 0;
})

for (let n = 0; n < maxLength; n++) {
    for (let m = 0; m < input.length; m++) {
        if(input[m][n]) result += input[m][n];
    }
}

console.log(result);