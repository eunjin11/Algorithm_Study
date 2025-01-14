N, M = map(int, input().split())
customers=[]

for _ in range(M):
    customers.append(int(input()))

customers.sort()

profit = 0
price = 0

for i in range(M):
    count = min(N, M-i)

    if profit<count*customers[i]:
        profit = count*customers[i]
        price = customers[i]

print(price, profit)