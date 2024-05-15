import sys
input = sys.stdin.readline

N=int(input())

in_order={}
for i in range(N):
    car=input().rstrip()
    in_order[car]=i

out_list=[]
for i in range(N):
    car=input().rstrip()
    out_list.append(car)

count=0

for i in range(N):
    for j in range(i+1, N):
        if in_order[out_list[i]]>in_order[out_list[j]]:
            count+=1
            break

print(count)