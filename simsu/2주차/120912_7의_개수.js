function solution(array) {
    let answer = 0;
    array.forEach(x => {
        [...x.toString()].forEach(y => {
            if(y==='7') answer ++;
        })
    })
    return answer;
}