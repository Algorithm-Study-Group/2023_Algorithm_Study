h, m = map(int, input().split())
time = int(input())

h += time // 60
m += time % 60

if m >= 60 and h >= 23:
    h -= 24
    h += 1
    m -= 60
    print(h, m)
elif m >= 60 and h < 23:
    h += 1
    m -= 60
    print(h, m)
elif m < 60 and h >= 24:
    h -= 24
    print(h, m)
else:
    print(h, m)