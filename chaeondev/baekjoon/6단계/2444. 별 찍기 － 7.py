n = int(input())
for i in range(1, n):
    lhs = ' '*(n-i)
    star = '*'*(2*i-1)
    print(lhs+star)
for j in range(n,0,-1):
    lhs = ' '*(n-j)
    star = '*'*(2*j-1)
    print(lhs+star)