function solution(numbers) {
    let answer = 0;
    answer = numbers.reduce((x, y) => x+y) / numbers.length;
    return answer;
}