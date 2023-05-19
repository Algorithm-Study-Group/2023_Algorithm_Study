function solution(cipher, code) {
    let answer = [];
    for (let i = 1 ; i <= cipher.length; i++) {
        if (i%code == 0) {
            answer.push(cipher[i-1]);
        }
    }
    return answer.toString().replaceAll(",", "");
}
/* 방법 2
function solution(cipher, code) {
    let reg = new RegExp(`.{${code-1}}(.)`, 'g');
    return [...cipher.matchAll(reg)].map(x => x[1]).join('');
}
*/