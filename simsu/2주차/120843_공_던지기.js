function solution(numbers, k) {
    let len = numbers.length;
    const answer = numbers[((k-1)*2)%len];
    return answer;
}