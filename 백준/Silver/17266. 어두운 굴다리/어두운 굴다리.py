N = int(input())
M = int(input())
X = list(map(int, input().split()))

answer = 0
if M==1:
    answer = max(X[0], N-X[0])
else:
    for i in range(M):
        if i==0:
            h=X[i]
        elif i==M-1:
            h=N-X[i]
        else:
            d = X[i]-X[i-1]

            if d%2==0: h=d//2
            else: h=d//2+1
        answer=max(answer, h)
    
print(answer)