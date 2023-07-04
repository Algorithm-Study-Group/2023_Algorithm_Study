/**
 * 행렬을 각각 안나누고 반복분안에서 처리했을때 제출시 계속 실패뜸
 * 두 배열을 더해주는 로직은 똑같았음
 * arr1, arr2로 나눠서 풀어보니 잘된다.
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')
const [n, m] = input[0].split(' ').map(Number)

let arr1 = []
let arr2 = []

for(let i=1; i<=n; i++) {
    arr1.push(input[i].split(' ').map(Number))
    arr2.push(input[i+n].split(' ').map(Number))
}

for(let j=0; j<arr1.length; j++) {
    console.log(arr1[j].map((x, y) => arr1[j][y]+arr2[j][y]).join(' '))
}