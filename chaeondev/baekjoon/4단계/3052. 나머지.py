ans = set()
for _ in range(10):
    i = int(input())
    ans.add(i%42)
print(len(ans))