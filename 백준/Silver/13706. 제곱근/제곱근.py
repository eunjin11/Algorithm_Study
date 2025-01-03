N = int(input())

left, right = 0, N
result = 0

while left <= right:
    mid = (left + right) // 2
    if mid * mid == N:
        result = mid
        break
    elif mid * mid < N:
        left = mid + 1
    else:
        right = mid - 1

print(result)
