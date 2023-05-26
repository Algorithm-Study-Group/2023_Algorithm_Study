function solution(n) {
    var answer = [];
    for(let i = 1; i <= n; i++) n%i == 0? answer.push(i) : 0;
    return answer;
}