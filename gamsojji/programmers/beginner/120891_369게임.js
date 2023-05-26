function solution(order) {
    return order.toString().split("").filter(t=>Number(t)%3==0 && Number(t)>0).length;
}