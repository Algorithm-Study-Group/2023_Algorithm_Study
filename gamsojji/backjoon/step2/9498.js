let fs = require("fs");
const filePath = process.platform === 'linux' ? "/dev/stdin" : `${__dirname}/input.txt`;
let input = fs.readFileSync(filePath).toString();
input = parseInt(input);

if(input >= 90){
    console.log("A");
}else if(input >= 80){
    console.log("B");
}else if(input >= 70){
    console.log("C");
}else if(input >= 60){
    console.log("D");
}else{
    console.log("F");
}