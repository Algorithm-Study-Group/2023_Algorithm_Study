function solution(dot) {
    if (dot[0] < 0) {
        if(dot[1] <0) {
            return 3;
        }
        return 2;
    }
    if(dot[1] <0) {
            return 4;
        }
    return 1;
}