let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 0; i < input.length-1; i++){
    const num = input[i].split(' ');

    if(num[0] % num[1] == 0){
        console.log("multiple");
    } else if (num[1] % num[0] == 0){
        console.log("factor");
    } else {
        console.log("neither");
    }
}