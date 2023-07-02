word = input()
word = word.upper()
word_set = list(set(list(word)))
cnt = 0
alphabet = ''
for w in word_set:
    if cnt < word.count(w):
        cnt = word.count(w)
        alphabet = w
    elif cnt == word.count(w) and alphabet != '':
        alphabet = '?'
print(alphabet)
