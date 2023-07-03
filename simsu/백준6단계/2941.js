const fs = require('fs')
const data = fs.readFileSync("/dev/stdin").toString().trim();
let replacement = data.replaceAll(/c=|c-|dz=|d-|lj|nj|s=|z=/g, 'K');
console.log(replacement.length);