import sys
input = sys.stdin.readline

T = int(input())

# 삼각수 집합 만들기
triangle = set([1])
element=1
for i in range(2, 50):
    triangle.add(element+i)
    element=element+i

#세 삼각수로 만들 수 있는지 확인
def Eureka(K):
    for i in triangle:
        for j in triangle:
            for k in triangle:
                if i+j+k==K:
                    return 1
    
    return 0

for _ in range(T):
    K = int(input())
    print(Eureka(K))