function solution(emergency) {
    var answer = [];
    var sort = [...emergency].sort((a, b) => {return b - a;});
    
    return emergency.map(num => {
        return sort.indexOf(num)+1;
    });;
}