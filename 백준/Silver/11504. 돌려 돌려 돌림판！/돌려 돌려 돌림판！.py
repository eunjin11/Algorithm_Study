import sys
input = sys.stdin.readline

T = int(input())

for _ in range(T):
    N, M = map(int, input().split())

    X = int("".join(list(map(str, input().split()))))
    Y = int("".join(list(map(str, input().split()))))

    wheel=list(map(str, input().split()))
    
    answer=0
    
    for i in range(M):
      wheel.append(wheel[i])

    for i in range(N):
      number=''

      for j in range(M):
        number+=wheel[i+j]
	
      number=int(number)

      if X<=number<=Y:
        answer+=1
		      
    print(answer)