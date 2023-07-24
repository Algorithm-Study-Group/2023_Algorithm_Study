const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(v => +v)

const sum = input.reduce((a,c) => a+=c)
const angles = new Set(input)

if(sum!==180) console.log('Error')
else {
    if(angles.size===1) console.log('Equilateral')
    if(angles.size===2) console.log('Isosceles')
    if(angles.size===3) console.log('Scalene')
}