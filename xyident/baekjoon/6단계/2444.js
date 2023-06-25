let input = require("fs").readFileSync("/dev/stdin").toString().trim();

const length = 2 * input - 1

for(let i = 1; i <= input; i++){
    console.log(' '.repeat(input-i) + '*'.repeat(2 * i - 1));
}
for(let i = 1; i <= input - 1; i++){
    console.log(' '.repeat(i) + '*'.repeat(length - (2 * i)));
}