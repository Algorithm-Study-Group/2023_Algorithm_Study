function solution(age) {
    var answer = '';
    var earthage = age.toString().split("");
    earthage.forEach((num) => {
        answer += String.fromCharCode(97+parseInt(num));
    })
    
    return answer;
}