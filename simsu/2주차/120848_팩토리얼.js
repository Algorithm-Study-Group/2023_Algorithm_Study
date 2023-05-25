function solution(n) {
    let memory = [0,1,2,6,24,120,720,5040,40320,362880,3628800];
    for(let i=10 ; i>=0 ; i--) {
        if(n>=memory[i]) return i;
    }
}