let input = require("fs").readFileSync("/dev/stdin").toString().trim();

let letters = input.split("");
let reverseStr = letters.reverse().join("");

input == reverseStr ? console.log(1) : console.log(0);