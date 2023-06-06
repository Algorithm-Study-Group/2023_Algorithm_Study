let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let count = ceil(input / 4);
let text = '';

for(let i = 0; i < count; i++){
    text += "long ";
}

text += "int";

console.log(text);