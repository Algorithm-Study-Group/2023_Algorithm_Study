let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim();
let result = "";
for (let i = 1; i <= parseInt(input); i++) {
    for (let j = parseInt(input); j > i; j--) {
        result += " ";
    }
    for (let j = 1; j <= i; j++) {
        result += "*";
    }
    result += "\n";
}
console.log(result);