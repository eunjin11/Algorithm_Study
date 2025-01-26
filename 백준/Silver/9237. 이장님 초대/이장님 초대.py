N = int(input())
trees = list(map(int, input().split()))
trees.sort(reverse=True)

days = []
for i in range(N):
    days.append(trees[i]+ 1 + i)

print(max(days) + 1)