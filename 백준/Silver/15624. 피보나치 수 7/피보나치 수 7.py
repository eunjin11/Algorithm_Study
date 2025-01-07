n=int(input())
F=[ 0 for _ in range(n+2)]
F[1]=1
for i in range(2, n+1):
    F[i]=(F[i-1]+F[i-2])%1000000007
print(F[n])