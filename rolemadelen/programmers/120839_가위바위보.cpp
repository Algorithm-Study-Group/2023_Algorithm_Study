#include <string>
using namespace std;

string solution(string rsp) {
    string ans = "";
    
    for(int i=0; i<rsp.size(); ++i) {
        if(rsp[i] == '2') ans += "0";
        else if(rsp[i] == '0') ans += "5";
        else ans += "2";
    }
    
    return ans;
}