from itertools import permutations

num = list(input())
numbers = list(permutations(num, len(num)))
numbers.sort(reverse=True)

result = [ "".join(n) for n in numbers]
strNum = "".join(num)
answer = 0

for n in result:
  if n<=strNum:
    break
  else:
    answer = n

print(answer)