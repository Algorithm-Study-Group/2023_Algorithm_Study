function solution(numbers, k) {
    var answer = 0;
    return numbers[2*(k-1)%numbers.length];
    
}