n, m = map(int, input().split())
basket = [0]*n

for _ in range(m):
    i, j, k = map(int, input().split())
    for ind in range(i-1, j):
        basket[ind] = k
for ans in range(n):
    print(basket[ans], end= ' ')