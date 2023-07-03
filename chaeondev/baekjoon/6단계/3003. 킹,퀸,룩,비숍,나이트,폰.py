original = [1,1,2,2,2,8]
now = list(map(int, input().split()))
for i in range(len(original)):
    print(original[i] - now[i], end = ' ')