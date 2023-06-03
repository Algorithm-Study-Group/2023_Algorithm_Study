h, m = map(int, input().split())

if m >= 45:
    print(h, m-45)
elif m < 45 and h != 0:
    print(h-1, 60-(45-m))
elif m < 45 and h == 0:
    print(23, 60-(45-m))