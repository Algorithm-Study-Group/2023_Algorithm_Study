function solution(hp) {
    var answer = 0;
    let ants = [5, 3, 1];
    var last = hp;
    ants.forEach( ant => {
        let need = parseInt( last / ant);
        answer += need;
        last -= need*ant;
    })
    
    return answer;
}