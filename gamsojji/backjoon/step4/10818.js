let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
let result = [input[1].split(" ").map(Number)[0],input[1].split(" ").map(Number)[0]];
input[1].split(" ").map(Number).forEach(element => {
    if(element < result[0]){
        result[0] = element;
    }else if(element > result[1]){
        result[1] = element;

    }
});
console.log(...result);
