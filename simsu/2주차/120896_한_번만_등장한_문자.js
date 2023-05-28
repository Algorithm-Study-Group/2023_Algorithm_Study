function solution(s) {
    let answer = [];
    let obj = {};
    for(let str of s) {
        if(!obj[str]) obj[str] = 1;
        else obj[str] ++;
    }
    for (const [key, value] of Object.entries(obj)) {
        if(value==1) answer.push(key);
    }
    return answer.sort().join('');
}