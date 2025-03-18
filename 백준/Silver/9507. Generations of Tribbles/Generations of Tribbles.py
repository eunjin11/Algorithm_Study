N = int(input())

numbers = [0 for _ in range(68)]
numbers[0] = 1
numbers[1] = 1
numbers[2] = 2
numbers[3] = 4

for i in range(4, 68):
    numbers[i] = numbers[i-1]*2 - numbers[i-5]

for _ in range(N):
    n = int(input())
    print(numbers[n])