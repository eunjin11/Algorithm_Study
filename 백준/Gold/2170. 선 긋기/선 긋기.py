import sys
input = sys.stdin.readline

N=int(input())

points=[]
for _ in range(N):
    points.append(tuple(map(int,input().split())))

points.sort()
start=points[0][0]
end=points[0][1]

ans=0

for x1, x2 in points:
    if x1<=end and x2>end:
        end=x2
    elif end<x1:
        ans+=end-start
        start=x1
        end=x2

print(ans+(end-start))