#include <string>
#include <sstream>

using namespace std;

int solution(string str) {
    istringstream iss(str);
    string word;
    int ans = 0;
    bool isMinus = 0;
    while (getline(iss, word, ' ')) {
        if(word[0] == '-') {
            isMinus = 1;
        } else if (word[0] == ' ') {
            continue;
        } else if (word[0] == '+') {
            isMinus = 0;
        } else {
            if(isMinus) ans -= stoi(word);
            else ans += stoi(word);
            isMinus = 0;
        }
    }
    
    return ans;
}