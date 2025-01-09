W, H, X, Y, P = map(int, input().split())

count=0
for _ in range(P):
    x, y = map(int, input().split())
    
    # 사각형 안 인지
    if X<=x<=X+W and Y<=y<=Y+H:
        count+=1
        continue

    radius = H/2
    # 반원 안 인지
    if ((x-X)**2+(y-(Y+radius))**2)**0.5<=radius:
        count+=1
    elif ((x-(X+W))**2+(y-(Y+radius))**2)**0.5<=radius:
        count+=1

print(count)

