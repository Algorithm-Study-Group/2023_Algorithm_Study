n, m = map(int, input().split())
a_lst = [[0]*m for _ in range(n)]
b_lst = [[0]*m for _ in range(n)]
for i in range(n):
    a_lst[i] = list(map(int, input().split()))
for i in range(n):
    b_lst[i] = list(map(int, input().split()))
result = [[0]*m for _ in range(n)]

for i in range(n):
    for j in range(m):
        result[i][j] = a_lst[i][j] + b_lst[i][j]
        print(result[i][j], end = ' ')
    print()