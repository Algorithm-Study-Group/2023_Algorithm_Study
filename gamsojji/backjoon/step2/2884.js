let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);
if(input[1] < 45){
    input[0] <=0 ? input[0] = 24: 0;
    input[0]--;
    input[1] = input[1]+60-45;
}else{
    input[1] -= 45;
}

console.log(input[0]+" "+input[1]);