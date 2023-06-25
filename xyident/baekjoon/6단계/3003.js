let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let chess = [1, 1, 2, 2, 2, 8];
let answer = [];

for(let i = 0; i < input.length; i++){
  answer[i] = chess[i] - input[i];
}

console.log(answer.join(" "));