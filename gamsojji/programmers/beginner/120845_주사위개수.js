function solution(box, n) {
    var answer = 1;
     box.forEach( length => {
        answer *= parseInt(length / n)
    })
    return answer;
}