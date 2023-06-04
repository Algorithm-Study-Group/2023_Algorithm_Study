let fs = require("fs");
let inputData = fs.readFileSync("/dev/stdin").toString().split(" ").map(val => +val);

inputData.sort(function (a, b) {
    return b - a;
});

const [A, B, C] = inputData;

if (A != B && A != C && B != C) {
    console.log(A * 100);

} else if (A == B && B != C) {
    console.log(1000 + A * 100);

} else if (B == C && C != A) {
    console.log(1000 + C * 100);

} else if (C == A && A != B) {
    console.log(1000 + C * 100);
    
} else {
    console.log(10000 + A * 1000);
}