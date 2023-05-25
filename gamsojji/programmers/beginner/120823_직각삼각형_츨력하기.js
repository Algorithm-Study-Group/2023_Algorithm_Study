const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let answer = "";

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    
    for(let i = 1; i <= input[0]; i++){
        for(let j = 0; j < i; j++){
            answer += "*";
        }
        answer += "\n";
    }
    console.log(answer);
});