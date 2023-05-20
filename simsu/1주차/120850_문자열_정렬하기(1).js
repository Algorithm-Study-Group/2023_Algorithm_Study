function solution(my_string) {
    let answer = [...my_string].reduce((old,cur) => {
        const int_cur = parseInt(cur);
        if (Number.isInteger(int_cur)) {
            old.push(int_cur);
        }
        return old;
    }, []).sort((a,b) => a-b);
    return answer;
}