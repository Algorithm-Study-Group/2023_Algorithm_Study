#include <string>
#include <vector>
using namespace std;

string solution(string str, string letter) {
    string ans = "";
    for(char ch : str) {
        if(ch != letter[0]) ans += ch;
    }
    return ans;
}