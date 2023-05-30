let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split(" ").map(x => Number(x));

const reducer = (val1, val2) => val1 + val2;
console.log(input.reduce(reducer));