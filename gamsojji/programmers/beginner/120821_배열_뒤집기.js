function solution(num_list) {
    return num_list.reduce((a, b)=>[b,...a],[]);
}