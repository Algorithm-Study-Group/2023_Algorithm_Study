function solution(my_string) {
    var str = ["a","e","i","o","u"];
    return my_string.split("").map(ans=>str.indexOf(ans) == -1 ? ans : "").join("");
}
