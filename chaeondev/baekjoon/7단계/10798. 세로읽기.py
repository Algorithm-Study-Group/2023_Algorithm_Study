word_lst = [[0]]*5
for i in range(5):
    word_lst[i] = list(input())
long = 0
for i in range(5):
    if len(word_lst[i]) > long:
        long = len(word_lst[i])
for i in range(5):
    if len(word_lst[i]) < long:
        cnt = long - len(word_lst[i])
        for _ in range(cnt):
            word_lst[i].append('') 
for j in range(long):
    for i in range(5):
        print(word_lst[i][j], end='')