let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

num = input[1].split(' ');
// num = [1, 3, 5, 7];
let count = 0;

for(let i = 0; i < num.length; i++){
    let factors = 0;
    
    for(let j = 1; j < num[i]; j++){
        if(num[i] % j == 0){
            factors++;
        }
    }

    if(num[i] > 1 && factors == 1){
        count++;
    } 
}

console.log(count);