function solution(array, n) {
    let answer = array.filter(x => x==n);
    return answer.length;
}