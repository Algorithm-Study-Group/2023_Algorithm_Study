let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let num = fs.readFileSync(filePath).toString().trim();
let start = 1;
let cnt = 1;
while(start < num){
    start += cnt*6;
    cnt++;
}
console.log(cnt);