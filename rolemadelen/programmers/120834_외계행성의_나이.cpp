#include <string>
using namespace std;

string solution(int age) {
    string num = to_string(age);
    string ans = "";
    
    for(char ch : num) {
        ans += ch-'0' + 97;
    }
    return ans;
}