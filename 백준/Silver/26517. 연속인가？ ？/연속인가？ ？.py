x = int(input())
a,b, c, d = map(int, input().split())

if a*x+b==c*x+d:
    print('Yes', a*x+b)
else:
    print('No')