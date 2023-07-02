word = input()
croalpha = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z=']
cnt = 0
for cro in croalpha:
    if cro in word:
        cnt += word.count(cro)
        word = word.replace(cro, '*')
word = word.replace('*', '')
cnt += len(word)
print(cnt)
