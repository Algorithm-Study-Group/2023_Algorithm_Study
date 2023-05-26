function solution(numbers) {
    var answer = numbers.sort((a,b)=>b-a);
    return Math.max(answer[0]*answer[1],answer[answer.length-1]*answer[answer.length-2]);
}