function solution(n) {
    let arr = [];
    insu(n, arr);
    return arr;
}
function insu(m, arr) {
    for(let i = 2 ; i <= m ; i++) {
        if(m%i==0) {
            if(!arr.includes(i)) arr.push(i);
            insu(m/i, arr);
            return;
        }
    }
}