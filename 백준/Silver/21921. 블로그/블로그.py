N, X = map(int, input().split())
visitors = list(map(int, input().split()))

visitors_sum = sum(visitors[:X])
max_visitors = visitors_sum
period = 1

for day in range(1, N-X+1):
    visitors_sum = visitors_sum - visitors[day-1] + visitors[day+X-1]
    if visitors_sum>max_visitors:
        max_visitors = visitors_sum
        period = 1
    elif visitors_sum == max_visitors:
        period += 1

if max_visitors==0:
    print('SAD')
else:
    print(max_visitors)
    print(period)