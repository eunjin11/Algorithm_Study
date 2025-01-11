N = int(input())

arr = [int(input()) for _ in range(N)]
arr.sort()
answer = 5

for i in range(N):
    count = 0
    for j in range(arr[i], arr[i]+5):
        if j not in arr:
            count+=1
    answer = min(answer, count)

print(answer)

