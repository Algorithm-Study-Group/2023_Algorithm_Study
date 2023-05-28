function solution(my_string) {
    return my_string.split(/\D/).filter(x => x).reduce((x,y) => +x+(+y), 0);
}