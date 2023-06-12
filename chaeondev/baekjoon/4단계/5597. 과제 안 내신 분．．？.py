lst = [x for x in range(1, 31)]
for _ in range(28):
    lst.remove(int(input()))
lst.sort()
print(lst[0])
print(lst[1])