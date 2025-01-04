N, K = map(int, input().split())
numbers = list(map(int, input().split()))

nums_orders = []
for i in range(N):
    nums_orders.append((numbers[i],i))

sorted_numbers = sorted(nums_orders, reverse=True)
sorted_numbers=sorted_numbers[:K]
sorted_numbers.sort(key=lambda x : x[1])

checked_list=[]
answer=0

for num in sorted_numbers:
    answer+=num[0]
    for checked_num in checked_list:
        if checked_num<num[1]:
            answer-=1
    checked_list.append(num[1])

print(answer)