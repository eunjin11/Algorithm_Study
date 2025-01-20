N=int(input())
A = list(map(int, input().split()))
B = list(map(int, input().split()))
M = int(input())
C = list(map(int, input().split()))

answer=[]

for i in range(N-1, -1, -1):
    if not A[i]:
        answer.append(B[i])
for i in range(M):
    answer.append(C[i])


print(' '.join(map(str, answer[:M])))