#include <string>
#include <vector>
#include <sstream>

using namespace std;

int solution(string s) {
    int answer = 0;
    vector<int> stk;
    
    istringstream iss(s);
    string word;
    while (getline(iss, word, ' ')) {
        if(word[0] == 'Z') {
            stk.pop_back();
        } else {
            stk.push_back(stoi(word));
        }
    }
    
    for(int x : stk) answer += x;
    return answer;
}