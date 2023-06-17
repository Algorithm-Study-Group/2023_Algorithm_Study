let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim();
let result = "";
for (let i = 97; i <= 122; i++) {
    
    result += input.indexOf(String.fromCharCode(i))+" ";
}

console.log(result)