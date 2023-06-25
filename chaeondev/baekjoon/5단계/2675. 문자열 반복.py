t = int(input())

for _ in range(t):
    r, s = input().split()
    r = int(r)
    answer = ''
    for i in range(len(s)):
        answer += s[i]*r
    print(answer)