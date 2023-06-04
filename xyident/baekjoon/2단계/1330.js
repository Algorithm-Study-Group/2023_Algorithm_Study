const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ").map(val => +val);

const [a, b] = inputData;

if(a>b){
    console.log(">");
} else if (a<b){
    console.log("<");
} else if(a==b){
    console.log("==");
}