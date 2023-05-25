function solution(num_list, n) {
    var answer = [];
    for(let i = 0; i <= num_list.length-1; i+=n){
        answer.push([...num_list].slice(i,i+n));
    }
    return answer;
}