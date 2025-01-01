n, k = map(int, input().split())

triangle = [ [0 for _ in range(n+1)] for _ in range(n+1)]

triangle[1][1]=1

for i in range(2, n+1):
    triangle[i][1]=1
    triangle[i][i]=1
    for j in range(2, i):
        triangle[i][j]= triangle[i-1][j-1]+triangle[i-1][j]

print(triangle[n][k])