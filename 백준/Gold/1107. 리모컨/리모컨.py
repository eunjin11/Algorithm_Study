import sys
input = sys.stdin.readline

target=int(input())
M=int(input())
if M:
    brokenBtn=set(map(int, input().split()))
else:
    brokenBtn=set()

minCount=abs(100-target)

for myInput in range(1000001):
    myInput=str(myInput)

    for i in range(len(myInput)):
        if int(myInput[i]) in brokenBtn:
            break
    else:
        minCount=min(minCount, abs(target-int(myInput))+len(myInput))

print(minCount)