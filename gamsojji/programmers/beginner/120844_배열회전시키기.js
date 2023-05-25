function solution(numbers, direction) {
    var answer = [];
    if(direction == "right"){
        return [...numbers.slice(-1), ...numbers.slice(0, -1)];
    }else{
        return [...numbers.slice(1), numbers[0]];
    }
    return answer;
}