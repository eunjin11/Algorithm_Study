lines=[]
for _ in range(4):
    lines.append(list(map(int, input().split())))

matrix=[[0 for _ in range(0, 101)] for _ in range(0, 101)]

for startX, startY, endX, endY in lines:
    for i in range(startX, endX):
        for j in range(startY, endY):
            matrix[j][i] = 1

answer=0
for line in matrix:
    answer+=sum(line)

print(answer)