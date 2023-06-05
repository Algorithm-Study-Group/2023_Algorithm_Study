let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString().split(" ").map(x => parseInt(x));

if(input[0]<input[1]){
    console.log("<");
}else if(input[0]>input[1]){
    console.log(">");
}else{
    console.log("==");
}