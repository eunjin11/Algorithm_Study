from collections import deque

def BFS(name):
    queue=deque()
    queue.append(name)

    while queue:
        node = queue.popleft()
        if not visited[node]:
            visited[node]=True
            queue.append(network[node])

testCase=0
while True:
    T = int(input())

    if T==0:
        break

    testCase+=1
    # name과 target을 hash로 저장
    network={}

    for i in range(T):
        name, target=map(str, input().split())
        network[name]=target

    visited={name:False for name in network}

    count=0
    for name in network:
        if not visited[name]:
            BFS(name)
            count+=1

    print(testCase, count)

