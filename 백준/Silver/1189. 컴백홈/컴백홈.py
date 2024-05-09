import sys
input = sys.stdin.readline

R,C,K=map(int,input().split())

ground=[ list(input().rstrip()) for _ in range(R) ] 
dx, dy = [0, 1, 0, -1], [1, 0, -1, 0]
#북 동 남 서

answer=0
def search(count, x, y):
    global answer
    if count==K and x==C-1 and y==0:
        answer+=1
    else:
        for i in range(4):
            ny=y+dy[i]
            nx=x+dx[i]
            if 0<=nx<C and 0<=ny<R and ground[ny][nx]=='.':
                ground[ny][nx]='T'
                search(count+1, nx, ny)
                ground[ny][nx]='.'

ground[R-1][0]='T'
search(1, 0, R-1)
print(answer)

#한수: 왼쪽 아래 (0,R-1) 목적지:오른쪽 위 (C-1,0)