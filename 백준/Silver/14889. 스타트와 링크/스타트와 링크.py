import sys
input = sys.stdin.readline

N=int(input())
arr=[]
for _ in range(N):
    arr.append(list(map(int, input().split())))


answer=sys.maxsize
state=0
visited=[False for _ in range(N)]


def search(count, num):
    global answer
    if count>=N//2:
        start, link =0, 0
        for i in range(N):
            for j in range(N):
                if visited[i] and visited[j]:
                    start+=arr[i][j]
                elif not visited[i] and not visited[j]:
                    link+=arr[i][j]
        
        answer=min(answer,abs(start-link))
        return
    else:
        for i in range(num, N):
            if visited[i]==False:
                visited[i]=True
                search(count+1, i+1)
                visited[i]=False

search(0,0)
print(answer)