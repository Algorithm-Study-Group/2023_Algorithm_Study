function solution(before, after) {
    let answer = {};
    for(let x of [...before]) {
        if(answer[x]!=undefined) answer[x]++;
        else answer[x]=1;
    }
    for(let x of [...after]){
        if(!answer[x] || answer[x]==0) {
            return 0;
        }
        else answer[x]--;
    }
    return 1;
}