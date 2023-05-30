const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ").map(val => +val);

const [age] = inputData;

console.log(age-543);