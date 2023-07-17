let input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let days = 0;
let height = 0;

while(height >= input[2]){
    days++;
    height = days(input[0] - input[1]) + input[1];
}

console.log(days);