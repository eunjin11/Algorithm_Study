import sys
input = sys.stdin.readline

N=int(input())
wine=[]
dp=[[0 for _ in range(N)] for _ in range(2)]

for _ in range(N):
    wine.append(int(input()))

dp[0][0]=wine[0]

if N!=1:
    dp[0][1]=wine[1]
    dp[1][1]=dp[0][0]+dp[0][1]

for i in range(2, N):
    dp[0][i]=max(dp[0][i-2]+wine[i], dp[1][i-2]+wine[i], dp[0][i-1], dp[1][i-1])
    dp[1][i]=dp[0][i-1]+wine[i]

ans = max(map(max, dp))
print(ans)