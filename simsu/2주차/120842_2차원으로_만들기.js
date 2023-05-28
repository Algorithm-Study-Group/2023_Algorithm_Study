function solution(num_list, n) {
    let answer = Array.from(Array(Math.floor(num_list.length/n)), () => new Array(n) );
    let y = 0;
    let x = 0;
    num_list.forEach( val => {
        if(y==n) {
            y = 0;
            x++;
        }
        answer[x][y] = val;
        y++;
    })
    return answer;
}