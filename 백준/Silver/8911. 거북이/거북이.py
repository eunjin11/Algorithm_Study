import sys
input = sys.stdin.readline

T = int(input())

dx, dy = [0, 1, 0, -1], [-1, 0, 1, 0]

for _ in range(T):
    input_str = list(input().rstrip())
    maxX, minX, minY, maxY = 0, 0, 0, 0
    currentX, currentY = 0, 0
    dir=0 # 북 동 남 서

    for command in input_str:
        if command == 'F':
            currentY += dy[dir]
            currentX += dx[dir]

            maxX=max(maxX, currentX)
            maxY=max(maxY, currentY)
            minX=min(minX, currentX)
            minY=min(minY, currentY)
            
        if command == 'B':
            currentY -= dy[dir]
            currentX -= dx[dir]

            maxX=max(maxX, currentX)
            maxY=max(maxY, currentY)
            minX=min(minX, currentX)
            minY=min(minY, currentY)

        if command == 'L':
            dir=(dir-1)%4
        if command == 'R':
            dir=(dir+1)%4

    print((maxX-minX) * (maxY-minY))