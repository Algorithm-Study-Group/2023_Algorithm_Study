let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num = input[0];
let coin = [25, 10, 5, 1];

for(let i = 1; i <= num; i++){
    let money = input[i];
    let answer = [];

    for(let j = 0; j < 4; j++){
        answer.push(Math.floor(money / coin[i]));
        
        money = money - answer[i]*coin[i];
    }

    for(let j = 0; j < 4; j++){
        console.log(answer[j].join(" "));
    }
}