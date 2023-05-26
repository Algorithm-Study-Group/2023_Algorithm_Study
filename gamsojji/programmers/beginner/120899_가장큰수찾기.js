function solution(array) {
    var answer = [...array].sort((a,b)=>b-a);
    return [answer[0],array.indexOf(answer[0])];
}