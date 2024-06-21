import sys
input = sys.stdin.readline

N=int(input())
table=[[0 for _ in range(N)] for _ in range(N)]

students_hash={}
for _ in range(N*N):
    temp=tuple(map(int, input().split()))
    students_hash[temp[0]]=set(temp[1:])

dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1] #서 북 동 남

for student in students_hash:
    available=[]
    for x in range(N):
        for y in range(N):
            if table[x][y]==0:
                empty=0
                like=0
                for dir in range(4):
                    nx = x + dx[dir]
                    ny = y + dy[dir]

                    if 0<=nx<N and 0<=ny<N:
                        if table[nx][ny] in students_hash[student]:
                            like+=1
                        if table[nx][ny]==0:
                            empty+=1
                available.append((like, empty, x, y))
    available.sort(key=lambda x: (-x[0], -x[1], x[2], x[3]))
    table[available[0][2]][available[0][3]]=student

# 만족도 구하기
ans=0

for x in range(N):
    for y in range(N):
        like=0
        for dir in range(4):
            nx = x + dx[dir]
            ny = y + dy[dir]

            if 0<=nx<N and 0<=ny<N:
                if table[nx][ny] in students_hash[table[x][y]]:
                    like+=1
        if like!=0:
            ans+=10**(like-1)

print(ans)