let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');
// input[0] : 정수의 개수
// input[1] : 정수들
// input[2] : 찾으려는 정수
let result = 0;
input[1].split(" ").map(Number).forEach(element => {
    if(element == Number(input[2])){
        result++;
    }
});
console.log(result);
