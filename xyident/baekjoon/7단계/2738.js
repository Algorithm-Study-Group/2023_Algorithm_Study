// 계속되는 런타임 에러(TypeError)

let input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");

const arr = input[0].split(" ");
const n = arr[0];
const m = arr[1];

for(let i = 1; i <= n; i++){
    let numbers_1 = input[i].split(" ");
    let numbers_2 = input[n + i].split(" ");
    let answer = [];

    for(let j = 0; j < m; j++){
        let sum = numbers_1[j] + numbers_2[j]; 

        answer.push(sum);
    }

    console.log(answer.join(" "));

}