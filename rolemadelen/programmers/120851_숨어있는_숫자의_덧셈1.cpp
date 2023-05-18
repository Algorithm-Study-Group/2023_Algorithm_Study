#include <string>
#include <vector>

using namespace std;

int solution(string str) {
    int answer = 0;
    for(char ch : str) {
        if(ch >= '0' && ch <= '9') {
            answer += (ch - '0');
        }
    }
    return answer;
}