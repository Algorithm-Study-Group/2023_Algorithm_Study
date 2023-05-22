function solution(n) {
    let answer = 0;
    for (let i=1; i<=n ; i++) {
        if (composite(i)) answer++;
    }
    return answer;
}
function composite(m) {
    let count = 0;
    for (let i=1 ; i<=m+1 ; i++) {
        if (count>=3) return true;
        if (m%i==0) count++;
    }
    return false;
}