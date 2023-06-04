const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ").map(val => +val);

const [year] = inputData;

if ((year%4 == 0 && year%100 != 0) || year%400 == 0){
    console.log("1");
} else {
    console.log("0");
}