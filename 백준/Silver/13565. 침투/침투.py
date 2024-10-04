import sys
input = sys.stdin.readline
from collections import deque

Y, X= map(int, input().split())
map=[]

dx, dy=[-1,0,1,0], [0,-1,0,1]

for _ in range(Y):
    map.append(list(input().rstrip()))

def bfs():
    while queue:
        x, y=queue.popleft()
        if (y==Y-1):
            print('YES')
            return

        for dir in range(4):
            nx, ny = x+dx[dir], y+dy[dir]
            if 0<=nx<X and 0<=ny<Y and map[ny][nx]=='0':
                map[ny][nx]='2'
                queue.append((nx, ny))
                    
            
    print('NO')

queue=deque()
for i in range(X):
    if (map[0][i]=='0'):
        queue.append((i,0))
bfs()