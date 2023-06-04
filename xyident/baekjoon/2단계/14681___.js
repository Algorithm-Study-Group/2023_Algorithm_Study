let fs = require("fs");
let inputData = fs.readFileSync("/dev/stdin").toString().split(" ").map(val => +val);

let [x, y] = inputData;

if (x>0 && y>0){
    console.log(1);
} else if (x<0 && y>0){
    console.log(2);
} else if (x<0 && y<0){
    console.log(3);
} else if (x>0 && y<0){
    console.log(4);
} 