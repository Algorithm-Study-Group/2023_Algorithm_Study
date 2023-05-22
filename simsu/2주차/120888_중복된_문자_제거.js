function solution(my_string) {
    let answer = new Set();
    for(let i of my_string) answer.add(i);
    return [...answer].join('');
}