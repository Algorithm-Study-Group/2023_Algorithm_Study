const fs = require('fs');
let chess = fs.readFileSync('/dev/stdin').toString();
let star = 1;
let space = 1;
let answer = '';

for(let i = 0 ; i < chess ; i++) {
    for(let k = 0 ; k < chess-space ; k++) {
        answer += " ";
    }
    for(let j = 0 ; j < star ; j++) {
        answer +="*";
    }
    answer +="\n";
    star += 2;
    space ++;
}
star -= 2;
space --;
for(let i = 0 ; i < chess ; i++) {
    star -= 2;
    space --;
    for(let k = 0 ; k < chess-space ; k++) {
        answer += " ";
    }
    for(let j = 0 ; j < star ; j++) {
        answer +="*";
    }
    answer +="\n";
}
console.log(answer);