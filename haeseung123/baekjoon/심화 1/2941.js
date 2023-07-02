const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()

const alpha = input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=/g , 0)
console.log(alpha.split('').length)
