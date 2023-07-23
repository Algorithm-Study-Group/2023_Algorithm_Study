let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const a = input[0];
const b = input[1];
const c = input[2];

if (a + b + c != 180) {
    console.log("Error");
} else {
    if(a == b && a == c){
        console.log("Equilateral");
    } else if (a == b || b == c || c == a){
        console.log("Isosceles");
    } else {
        console.log("Scalene");
    }
}