let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim();
input = parseInt(input);
let result = "";
while(input > 0){
    result +="long ";
    input-=4;
}
result +="int";
console.log(result);