let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let count = 0;
let index = 1;

while(index <= input[0] && count != input[1]){
    //console.log(count, index);
    if(input[0] % index == 0){
        count++;
    }
    index++;
}


if(count == input[1]){
    console.log(index -1);
} else {
    console.log(0);
}