const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()

for(let i=1; i<=input; i++) {
    console.log(' '.repeat((input-i))+'*'.repeat(i+(i-1)))
}
for(let j=input-1; j>0; j--) {
    console.log(' '.repeat((input-j))+'*'.repeat(j+(j-1)))
}