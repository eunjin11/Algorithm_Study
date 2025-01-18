K = int(input())
C = int(input())

# 동점일 경우 항상 가능

# M>N
# 영희가 이길 경우
# K-M(남은라운드)+1<M-N(둘의 차이)-1  -> 불가능

# 동수가 이길 경우
# K-N(남은라운드)<N-M(둘의 차이)-1 -> 불가능

answer = []
for _ in range(C):
    M, N = map(int, input().split())
    if M>N:
        answer.append(0 if K-M+1<M-N-1 else 1)
    elif M<N:
        answer.append(0 if K-N<N-M-1 else 1)
    else:
        answer.append(1)

for a in answer:
    print(a)