function solution(dots) {
    var y = [...dots].map(t=>t[1]);
    var x = [...dots].map(t=>t[0]);
    return (Math.max(...y)-Math.min(...y)) *  (Math.max(...x)-Math.min(...x)) ;
}