import sys
input = sys.stdin.readline

N, M, B=map(int,input().split())

height_num={}

for _ in range(N):
    row = list(map(int,input().split()))
    for i in row:
        if i in height_num:
            height_num[i]+=1
        else:
            height_num[i]=1

min_time=257*500*500*2
max_height=0

for height in range(257):
    time=0
    block=B
    for i in height_num:
        if i < height:
            time+=(height-i) * height_num[i]
            block-= (height-i) * height_num[i]
        else:
            time+=2*(i-height) * height_num[i]
            block+=(i-height) * height_num[i]

    if block>=0 and time<=min_time:
        min_time=time
        max_height=height

print(min_time, max_height)