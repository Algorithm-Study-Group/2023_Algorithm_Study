let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let result = "";
for (let i = 0; i < input.length; i++) {
    input[i] = input[i].split(" ").map(Number);
    if(input[i].length > 1){
        result += input[i][0]+input[i][1]+"\n"
    }
    
}
console.log(result);