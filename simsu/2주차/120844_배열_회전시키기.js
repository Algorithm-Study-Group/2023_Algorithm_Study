function solution(numbers, direction) {
    if (direction === "left") {
        let num = numbers.shift();
        numbers.push(num);
    }
    if (direction === "right") {
        let num = numbers.pop();
        numbers.unshift(num);
    }
    return numbers;
}