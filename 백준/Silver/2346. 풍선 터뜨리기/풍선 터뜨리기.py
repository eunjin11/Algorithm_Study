N = int(input())
inputs=list(map(int, input().split()))
balloons = []
for i in range(N):
    balloons.append((i, inputs[i]))

answer=[]
idx=0
while balloons:
    balloon = balloons.pop(idx)
    answer.append(balloon[0]+1)
    
    if balloon[1]<0 and balloons:
        idx+=balloon[1]
        idx%=len(balloons)
    elif balloons:
        idx+=balloon[1]-1
        idx%=len(balloons)

print(' '.join(map(str, answer)))