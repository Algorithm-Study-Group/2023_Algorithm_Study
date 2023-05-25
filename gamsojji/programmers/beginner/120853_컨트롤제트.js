function solution(s) {
    var answer = 0;
    let arr = s.split(" ").map(t=>Number(t));
    for(let i = 0; i <= arr.length-1; i++){
        if(isNaN(arr[i])){
            arr[i] = 0;
            arr[i-1] = 0;
        }
    }
    return arr.reduce((a,b)=>a+b,0);
}