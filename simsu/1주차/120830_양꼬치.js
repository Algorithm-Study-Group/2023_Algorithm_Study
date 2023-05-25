function solution(n, k) {
    let answer = 0;
    answer =2000 * (k - parseInt(n/10)) + 12000 * n;
    return answer;
}