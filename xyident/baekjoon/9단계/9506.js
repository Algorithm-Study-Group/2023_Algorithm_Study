let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 0; i < input.length - 1; i++){
    let sum = 0;
    let factors = [];
    
    for(let j = 1; j < input[i]; j++){
        if(input[i] % j == 0){
            factors.push(j);
            sum += j;
        }
    }

    if(sum == input[i]){
        console.log(input[i] + " = " + factors.join(" + "));
    } else {
        console.log(input[i] + " is NOT perfect. ");
    }
    //console.log(factors);
}