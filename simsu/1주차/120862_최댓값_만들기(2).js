function solution(numbers) {
    numbers.sort((a,b) => b-a);
    const surffix = numbers[numbers.length-1] * numbers[numbers.length-2];
    const prefix = numbers[0] * numbers[1];
    let answer = prefix < surffix ? surffix : prefix;
    return answer;
}