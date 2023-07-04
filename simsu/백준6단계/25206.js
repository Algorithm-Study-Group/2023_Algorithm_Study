const fs = require('fs');
const data = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let 전공과목수 = data.length;
let credit = 0;
let grade = 0;
const gradetonumber = {'A+': 4.5, 'A0': 4.0, 'B+': 3.5, 'B0': 3.0, 'C+': 2.5, 'C0': 2.0, 'D+': 1.5, 'D0': 1, 'F': 0.0};
for (let i = 0 ; i < data.length ; i++) {
    const [과목, 학점, 평점] = data[i].split(' ');
    if (평점=='P') 전공과목수 =-1;
    else {
        credit+= +학점;
        grade += +학점*gradetonumber[평점];
    }
}

console.log(grade/credit);