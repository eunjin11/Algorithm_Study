from collections import deque

N = int(input())
ground = [list(map(int, input().split())) for _ in range(N)]
visited = [[False for _ in range(N)] for _ in range(N)]
queue=deque()
queue.append((0,0))

while queue:
    x, y=queue.popleft()
    visited[y][x]=True

    if y==N-1 and x==N-1:
        print('HaruHaru')
        break

    if x+ground[y][x]<N and not visited[y][x+ground[y][x]]:
        queue.append((x+ground[y][x], y))
    if y+ground[y][x]<N and not visited[y+ground[y][x]][x]:
        queue.append((x, y+ground[y][x]))
else:
    print('Hing')