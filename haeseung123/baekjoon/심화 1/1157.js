const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim()

const arr = input.toUpperCase().split('')
const obj = {}

arr.forEach((e) => obj[e] !== undefined ? obj[e]+=1 : obj[e]=1)

const max = Math.max(... Object.values(obj))
const maxKeys = Object.keys(obj).filter(v => obj[v] === max)

console.log(maxKeys.length > 1 ? '?' : maxKeys[0])