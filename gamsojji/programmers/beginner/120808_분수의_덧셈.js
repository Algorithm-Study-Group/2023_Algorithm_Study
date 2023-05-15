function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    let numer = 0;
    let denom = 0;
    
    if(denom1 == denom2){
        numer = numer1+numer2;
        denom = denom1;
    }else{
        numer = numer1*denom2+numer2*denom1;
        denom = denom1*denom2;
    }
    
    if(numer == denom){
        answer =  [1,1];
    }else{
        for(let i = Math.min(numer, denom); i >= 2; i--){
            if(numer % i == 0 && denom % i == 0){
                numer/= i;
                denom/= i;
            }
        }
        answer = [numer, denom];
    }
    return answer;
}