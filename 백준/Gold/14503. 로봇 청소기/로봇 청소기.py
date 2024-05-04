import sys
input = sys.stdin.readline

N, M=map(int, input().split())
y, x, d=map(int, input().split())
ground=[]

for _ in range(N):
    ground.append(list(map(int, input().split())))

dx, dy = [0, 1, 0, -1], [-1, 0, 1, 0]
#d가 0일 경우 북쪽, 1일 경우 동쪽, 2인 경우 남쪽, 3인 경우 서쪽
count=0
while True:
    if ground[y][x]==0:
        ground[y][x]=-1
        count+=1

    #청소 되지 않은 빈 칸이 있는 경우
    for _ in range(4):
        d=(d-1)%4
        ny=y+dy[d]
        nx=x+dx[d]
        if ground[ny][nx]==0:
            y=ny
            x=nx
            break

    #청소 되지 않은 빈 칸이 없는 경우
    else:
        y-=dy[d]
        x-=dx[d]
        if ground[y][x]!=1:
            continue
        else:
            break

print(count)