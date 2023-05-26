#include <string>
#include <vector>
#include <map>

using namespace std;

string solution(string s) {
    string answer = "";
    map<char, int> mymap;
    for(char ch : s) {
        mymap[ch] += 1;
    }
    
    auto it = mymap.begin();
    while(it != mymap.end()) {
        if(it->second == 1) answer += it->first;
        ++it;
    }
    
    return answer;
}