let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let time = input[0].split(" ").map(Number);
time[1] += Number(input[1]);
while(time[1] >= 60){
    time[1] -= 60;
    time[0]++;
}
while(time[0] >= 24){
    time[0] -= 24;
}
console.log(time[0]+" "+time[1]);