const fs = require('fs')
const data = fs.readFileSync("/dev/stdin").toString().trim().split('\n');
let arr = []// 알파벳을 저장하는 배열
let count = 0;
for (let i=1 ; i<=data[0]; i++) {
    let str = data[i];
    let nocount = false;
    for (let j=0 ; j<str.length; j++) {
        if ( j==str.length || str[j] != str[j+1] ) {
            if(arr.indexOf(str[j]) != -1) {
                nocount=true;
                break;
            }
            arr.push(str[j]);
        }
    }
    if (!nocount) count++;
    arr = []
}
console.log(count);