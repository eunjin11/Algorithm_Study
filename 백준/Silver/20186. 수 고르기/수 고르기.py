N, K = map(int, input().split())
numbers = list(map(int, input().split()))

sorted_numbers = sorted(numbers, reverse=True)[:K]

answer=0
count=0

for num in sorted_numbers:
    answer+=num-count
    count+=1

print(answer)