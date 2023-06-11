let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let numbers = input[1].split(" ");

let max = Math.max(...numbers);

let sum = 0;

for(let i = 0; i < input[0]; i++){
    if(numbers[i] != max)
        numbers[i]/max*100;
    
    sum += numbers[i];
}

console.log(sum/input[0]);