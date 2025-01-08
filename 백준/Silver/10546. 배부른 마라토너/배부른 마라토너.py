import sys
input=sys.stdin.readline

N = int(input())
participants = {}
for _ in range(N):
    runner=input()
    if runner in participants:
        participants[runner]+=1
    else:
        participants[runner]=1

for _ in range(N-1):
    runner=input()
    participants[runner]-=1
    if participants[runner]==0:
        del participants[runner]

print(list(participants)[0])