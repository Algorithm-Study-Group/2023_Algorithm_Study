// 시간 초과로 인한 오답.

let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let count = 0;

let sum = input[0];
const whiteBoard = Array.from(Array(100), () => new Array(100).fill(false));

for(let i = 1; i <= sum; i++){
    let papers = input[i].split(" ")

    for(let x = papers[0]; x < papers[0] + 10; x++){
        for(let y = papers[1]; y < papers[1] + 10; y++){
            whiteBoard[x, y] = true;
        }
    }
}

for(let x = 0; x < 10; x++){
    for(let y = 0; y < 10; y++){
        if (whiteBoard[x][y] === true) count++;
    }
}

console.log(count);