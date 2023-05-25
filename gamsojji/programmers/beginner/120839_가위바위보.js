function solution(rsp) {
    var answer = '';
    var units = rsp.toString().split("");
    units.forEach( unit => {
        if(unit == 2) answer += 0;
        else if(unit == 0) answer += 5;
        else if(unit == 5) answer += 2;
    });
    return answer;
}