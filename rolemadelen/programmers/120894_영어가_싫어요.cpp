#include <string>
#include <vector>
#include <regex>
#include <iostream>

using namespace std;

long long solution(string numbers) {
    numbers = regex_replace(numbers, regex("zero"), "0");
    numbers = regex_replace(numbers, regex("one"), "1");
    numbers = regex_replace(numbers, regex("two"), "2");
    numbers = regex_replace(numbers, regex("three"), "3");
    numbers = regex_replace(numbers, regex("four"), "4");
    numbers = regex_replace(numbers, regex("five"), "5");
    numbers = regex_replace(numbers, regex("six"), "6");
    numbers = regex_replace(numbers, regex("seven"), "7");
    numbers = regex_replace(numbers, regex("eight"), "8");
    numbers = regex_replace(numbers, regex("nine"), "9");

    return stoll(numbers);
}