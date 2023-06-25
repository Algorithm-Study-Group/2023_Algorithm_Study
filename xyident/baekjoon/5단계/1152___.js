let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let num = new Array(2).fill('');

for (let i = 0; i < 2; i++) {
  for (let j = 2; j >= 0; j--) {
    num[i] += input[i][j];
  }
}
if (num[0] > num[1]) {
  console.log(num[0]);
} else {
  console.log(num[1]);
}