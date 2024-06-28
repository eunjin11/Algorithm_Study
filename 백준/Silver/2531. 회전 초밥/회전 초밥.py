import sys
input = sys.stdin.readline

dish=[]
N, d, k, c=map(int, input().split())

for _ in range(N):
    dish.append(int(input()))
dish+=dish[:k]

max_count=0
for i in range(N):
    my_dish=set(dish[i:i+k])
    my_dish.add(c)
    max_count=max(max_count, len(my_dish))

print(max_count)