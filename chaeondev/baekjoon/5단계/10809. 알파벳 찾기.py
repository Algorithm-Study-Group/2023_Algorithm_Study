string = input()
word = []
for char in string:
    word.append(ord(char)-ord('a'))

for i in range(26):
    if i in word:
        alphabet = chr(i + ord('a'))
        print(string.index(alphabet), end= ' ')
    else:
        print(-1, end= ' ')