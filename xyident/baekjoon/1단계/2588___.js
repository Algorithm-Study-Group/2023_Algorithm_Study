const fs = require("fs");
const inputData = fs.readFileSync("/dev/stdin").toString().split(" ").map(val => +val);

const [a, b] = inputData;

const b100 = parseInt(b/100);
const b10 = parseInt((b - b100 * 100)/10);
const b1 = parseInt(b%10);

console.log(a*b1);
console.log(a*b10);
console.log(a*b100);
console.log(a*b);