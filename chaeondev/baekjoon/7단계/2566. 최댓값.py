lst = [[0]*9]*9
big = []
for i in range(9):
    lst[i] = list(map(int, input().split()))
    big.append(max(lst[i]))
print(max(big))
biggest = max(big)
for i in range(9):
    if biggest in lst[i]:
        print((i+1), lst[i].index(biggest)+1)
    