N = int(input())
A, B = map(int, input().split())
C = int(input())
D=[]
for _ in range(N):
    D.append(int(input()))

# 토핑 열량이 높은 순으로 정렬
D.sort(reverse=True)

answer=[]

# 열량이 큰 토핑 부터 하나씩 넣기
# 토핑을 아예 넣지 않는 경우가 아니면, 열량이 제일 큰 토핑은 무조건 포함
# 열량이 제일 큰 토핑을 포함시키고 그 다음으로 큰 토핑들을 포함 한 경우를 계산
for i in range(len(D)+1):
    answer.append((C+sum(D[:i]))//(A+(i)*B))

print(max(answer))