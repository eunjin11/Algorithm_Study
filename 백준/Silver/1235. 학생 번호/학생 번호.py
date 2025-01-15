N = int(input())

nums = []
for _ in range(N):
    nums.append(input())

max_len = len(nums[0])
answer = 0

for k in range(1, max_len+1):
    new_nums=set()
    for idx in range(N):
        if nums[idx][-k:] not in new_nums:
            new_nums.add(nums[idx][-k:])
        else:
            break
    if len(new_nums)==N:
        print(k)
        break
