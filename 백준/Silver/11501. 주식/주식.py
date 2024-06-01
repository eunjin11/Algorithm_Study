import sys
input = sys.stdin.readline

T=int(input())

for _ in range(T):
    N=int(input())
    stock=list(map(int, input().split()))

    money=0
    max=0
    for i in range(N-1, -1, -1):
        if stock[i]>max:
            max=stock[i] #판매할 가격 설정
        else:
            money+=max-stock[i] #판매 (차익: 판매 가격 - 구매 가격)
    print(money)