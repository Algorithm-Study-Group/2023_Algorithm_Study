const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const n = input.slice(1).map(v => v.split(` `).map(Number))
let paper = Array.from(Array(100), () => Array(100).fill(0))
let size = 0

n.forEach(e => {
    let [x, y] = e

    for(let i=x; i<x+10; i++) {
        for(let j=y; j<y+10; j++) {
            if(paper[i][j]===1) continue
            paper[i][j] = 1
            size++
        }
    }
})

console.log(size)