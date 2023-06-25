const fs = require('fs');
const data = fs.readFileSync('/dev/stdin').toString().trim();
if(data) {
    console.log(data.split(' ').length);
} else {
    console.log('0');
}