#include <string>
#include <vector>

using namespace std;

string solution(string cipher, int code) {
    string answer = "";
    
    for(int i=code; i<=cipher.size(); i+=code) {
        answer += cipher[i-1];
    }
    
    return answer;
}