import sys
input = sys.stdin.readline

num = int(input())

A = [0 for _ in range(0, 1001)]
A[0], A[1] = 1, 1

for i in range(2, num+1):
    impossible_set=set()
    for k in range(1, i//2+1):
        impossible = 2*A[i-k]-A[i-2*k]
        impossible_set.add(impossible)

    for n in range(1, 1001):
        if n not in impossible_set:
            A[i]=n
            break
    
print(A[num])