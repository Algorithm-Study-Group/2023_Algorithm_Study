#include <string>
#include <vector>

using namespace std;

string solution(string my_string) {
    string answer = "";
    
    for(char ch : my_string) {
        if(ch >= 'a' && ch <= 'z') answer += (ch - 32);
        else answer += (ch + 32);
    }
    
    return answer;
}