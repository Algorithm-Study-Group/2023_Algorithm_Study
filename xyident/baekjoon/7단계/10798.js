let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let answer = "";
let arr = [];

for(let i = 0; i < input.length; i++){
    let char = input[i].split(" ");
    arr[i] = [];

    for(let j = 0; j < char.length; j++){
        arr[i][j] = char[j];
    }
}

for(let i = 0; i < 15; i++){
    for (let j = 0; j < 5; j++){
        answer += arr[j][i];
    }
}

console.log(answer);