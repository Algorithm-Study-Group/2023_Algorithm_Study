function solution(numbers) {
    let sum = 0;
    numbers.forEach(function(num){
        sum += num;
    });
    return  sum / numbers.length;
}