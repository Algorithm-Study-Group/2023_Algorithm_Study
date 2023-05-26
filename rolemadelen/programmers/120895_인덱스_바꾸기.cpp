#include <string>
using namespace std;

string solution(string str, int x, int y) {
    char temp = str[x];
    str[x] = str[y];
    str[y] = temp;
    return str;
}