#include <string>
#include <vector>

using namespace std;

string solution(string my_string, int n) {
    string ans = "";

    for(char ch : my_string) {
        for(int i=0; i<n; ++i) ans += ch;
    }
    
    return ans;
}