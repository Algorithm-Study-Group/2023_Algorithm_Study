function solution(n, k) {
    var answer = 0;
    let yang = n * 12000;
    let drink = k * 2000;
    
    return yang + drink - parseInt(n / 10) * 2000;
}