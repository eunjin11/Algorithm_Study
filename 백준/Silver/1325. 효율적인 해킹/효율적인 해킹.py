import sys
from collections import deque
input = sys.stdin.readline

N, M=map(int,input().split())

graph=[[] for _ in range(N+1)]

for _ in range(M):
    target, start=map(int,input().split())
    graph[start].append(target)

def bfs (node):
    queue = deque([node])
    visited = [False for _ in range(N+1)]
    visited[node] = True
    count=1
    
    while queue:
        a = queue.popleft()
        for i in graph[a]:
            if not visited[i]:
                visited[i] = True
                count+=1
                queue.append(i)
    return count

countList=[0 for _ in range(N+1)]
for i in range(1,N+1):
    countList[i]=bfs(i)

maxCount=max(countList)
for i in range(1,N+1):
    if countList[i]==maxCount:
        print(i, end=' ')