function solution(n) {
    var answer = 1;
    var num = 1;
    while(num < n){
        if(팩토리얼(num) <= n && n  < 팩토리얼(num+1)) return num;
        else num++;
    }
}

function 팩토리얼(num){
    let result = 1;
    for(let i = 2; i <= num; i++){
        result *= i;
    }
    return result;
}