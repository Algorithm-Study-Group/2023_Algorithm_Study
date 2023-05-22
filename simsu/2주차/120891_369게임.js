function solution(order) {
    let answer = 0;
    [...order.toString()].map(x => {
        if (x === "3" || x === "6" || x === "9") { answer++; }
    })
    return answer;
}