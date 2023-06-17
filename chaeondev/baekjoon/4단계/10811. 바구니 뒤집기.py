n, m = map(int, input().split())
lst = [x for x in range(1,n+1)]

for _ in range(m):
    i, j = map(int, input().split())
    lst[i-1:j] = lst[i-1:j][::-1]

for i in range(n):
    print(lst[i], end=' ')