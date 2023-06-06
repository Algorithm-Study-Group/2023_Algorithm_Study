let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let total = 0;
let cnt = 0;

for (let index = 2; index < input.length; index++) {
    input[index] = input[index].split(" ").map(Number);
    total += input[index][0]*input[index][1]
    cnt ++;
}
if(total == input[0] && cnt == input[1]){
    console.log("Yes");
}else{
    console.log("No")
}
