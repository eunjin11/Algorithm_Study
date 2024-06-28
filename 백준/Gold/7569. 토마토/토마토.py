import sys
input = sys.stdin.readline
from collections import deque

M, N, H=map(int, input().split())

box=[]
for _ in range(H):
    floor=[]
    for _ in range(N):
        floor.append(list(map(int, input().split())))
    box.append(floor)

dx, dy=[1, 0, -1, 0, 0, 0], [0, 1, 0, -1, 0, 0]
dh = [0, 0, 0, 0,-1, 1]

def search():
    queue=deque()
    for z in range(H):
        for x in range(M):
            for y in range(N):
                if box[z][y][x]==1:
                    queue.append((z, x, y))
    while queue:
        z, x, y= queue.popleft()
        for dir in range(6):
            nx=x+dx[dir]
            ny=y+dy[dir]
            nz=z+dh[dir]
            if 0<=nx<M and 0<=ny<N and 0<=nz<H and box[nz][ny][nx]==0:
                queue.append((nz,nx,ny))
                box[nz][ny][nx]=box[z][y][x]+1

def isZero():
    global day
    for floor in box:
        for row in floor:
            for tomato in row:
                if tomato==0:
                    print(-1)
                    return 0
            day=max(day, max(row))


search()
day=0
if isZero()!=0:
    print(day-1)
