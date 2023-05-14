#include <string>
#include <sstream>
#include <map>

using namespace std;

string solution(string letter) {
    map<string, char> morseMap;
    string ans = "";
    string morseCode[] = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};

    for (int i = 0; i < 26; ++i) {
        morseMap[morseCode[i]] = 'a'+i;
    }
    
    istringstream iss(letter);
    string word;
    while (getline(iss, word, ' ')) {
        ans += morseMap[word];
    }
    
    return ans;
}