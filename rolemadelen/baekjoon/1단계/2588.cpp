#include <iostream>
using namespace std;

int main() {
    int a, b, c;
    cin >> a;
    cin >> b;
    c = a*b;

    cout << a * (b%10) << endl;
    b/=10;
    cout << a * (b%10) << endl;
    b/=10;
    cout << a * b << endl;
    cout << c << endl;

    return 0;
}
