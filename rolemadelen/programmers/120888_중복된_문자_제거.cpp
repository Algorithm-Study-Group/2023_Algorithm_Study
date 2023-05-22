#include <string>
#include <vector>

using namespace std;

string solution(string my_string) {
    bool used[123] = {0};
    string answer = "";
    
    for(char ch : my_string) {
        if(used[ch]) continue;
        answer += ch;
        used[ch] = 1;
    }
    
    return answer;
}