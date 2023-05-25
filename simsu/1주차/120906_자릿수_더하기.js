function solution(n) {
    let answer = 0;
    for(let i of String(n)) { answer += parseInt(i) }
    return answer;
}