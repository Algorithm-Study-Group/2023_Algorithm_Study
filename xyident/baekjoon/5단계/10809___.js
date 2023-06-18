let input = require("fs").readFileSync("/dev/stdin").toString();

let answer = [];

for (let i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
    list.push(input.indexOf(String.fromCharCode(i)));
}

console.log(answer.join(" "));