const fs = require('fs');
let strings = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let answer = '';
for(let i = 1 ; i <= strings[0] ; i++) {
    let [num, repeat_str] = strings[i].split(' ');
    [...repeat_str].map(x => answer+=x.repeat(num));
    answer += '\n';
}
console.log(answer);