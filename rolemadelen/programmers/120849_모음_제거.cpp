#include <string>
using namespace std;

string solution(string str) {
    string answer = "";
    for(int i=0; i<str.size(); ++i) {
        char ch = str[i];
        if(ch=='a' || ch=='i' || ch=='e' || ch=='o' || ch=='u') continue;
        answer += ch;
    }
    return answer;
}