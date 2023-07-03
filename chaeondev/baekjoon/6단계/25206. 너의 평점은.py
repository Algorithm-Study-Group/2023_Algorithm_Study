sum = 0
cnt = 0
while True:
    try:
        obj, num, grade = input().split()
    except:
        break
    cnt += float(num)
    if grade == 'A+':
        sum += float(num) * 4.5
    elif grade == 'A0':
        sum += float(num) * 4.0
    elif grade == 'B+':
        sum += float(num) * 3.5
    elif grade == 'B0':
        sum += float(num) * 3.0
    elif grade == 'C+':
        sum += float(num) * 2.5
    elif grade == 'C0':
        sum += float(num) * 2.0
    elif grade == 'D+':
        sum += float(num) * 1.5
    elif grade == 'D0':
        sum += float(num) * 1.0
    elif grade == 'F':
        sum += float(num) * 0
    elif grade == 'P':
        cnt -= float(num)
    
print(sum/cnt)