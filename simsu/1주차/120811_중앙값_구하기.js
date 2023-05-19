function solution(array) {
    let answer = array.sort((a,b) => { return a - b; });
    return answer[(answer.length-1)/2];
}