const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

const getDivisors = (num) => {
    let divisors = []
    for(let i=1; i<=Math.sqrt(num); i++) {
        if(num%i===0) {
            divisors.push(i)
            if(num/i!==i) divisors.push(num/i)
        }
    }
    let tmp = divisors.sort((a,b) => a-b).pop()
    return divisors
}

for(let i=0; i<input.length-1; i++) {
    const arr = getDivisors(input[i])
    const sum = arr.reduce((a,c) => a+=c)

    if(sum === Number(input[i])) console.log(input[i] + ' = ' + arr.join(' + '))
    else console.log(input[i] + ' is NOT perfect. ')
}

//시간 복잡도를 고려하여 Math.sqrt 함수 사용(제곱근 활용)