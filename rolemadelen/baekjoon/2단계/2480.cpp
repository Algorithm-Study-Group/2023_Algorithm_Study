#include <iostream>
using namespace std;

int main() {
    int a,b,c;
    cin >> a >> b >> c;
    if(a==b && b==c) cout << 10000+a*1000 << endl;
    else if(a!=b && a!=c && b!=c) {
        int m = max(a, max(b,c));
        cout << 100*m << endl;
    } else {
        if(a==b || a==c) cout << 1000+a*100 << endl;
        else cout << 1000+b*100 << endl;
    }
    return 0;
}