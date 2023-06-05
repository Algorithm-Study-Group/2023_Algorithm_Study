let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number);

if(input[0] == input[1] && input[2] == input[1]){ // 세 수가 같을 때
    console.log(10000+input[0]*1000);
}else if(input[0] == input[1]|| input[2] == input[0]){
    console.log(1000+input[0]*100);
}else if(input[2] == input[1] ){
    console.log(1000+input[1]*100);
}else{
    console.log(Math.max(...input)*100);
}