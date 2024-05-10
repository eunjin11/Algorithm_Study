import sys
input = sys.stdin.readline

N, M=map(int,input().split())

answer=0

if N==1:
    answer=1
elif N==2:
    answer=min(4,(M+1)//2)
else:
    if M<7:
        answer=min(4, M)
    else:
        answer=M-7+5

print(answer)
