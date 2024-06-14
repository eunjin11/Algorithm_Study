H, W= map(int,input().split())

block = list(map(int,input().split()))
count=0

for i in range(1, W-1):
    left_max=max(block[:i])
    right_max=max(block[i+1:])
    wall=min(left_max, right_max)
    if wall>block[i]:
        count+=wall-block[i]
        
print(count)