import sys
input = sys.stdin.readline

def is_prime(n):
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            DP[n]=DP[n//i]+1
            return False
    DP[n]=1
    return True  

A, B=map(int, input().split())
DP=[0 for _ in range(B+1)]
is_prime_DP=[False for _ in range(B+1)]
answer=0

for i in range(2, B+1):
    is_prime_DP[i] = is_prime(i)

for i in range(A, B+1):
    if is_prime_DP[DP[i]]:
        answer+=1

print(answer)