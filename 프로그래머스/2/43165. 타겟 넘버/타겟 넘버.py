
# def solution(numbers, target):
#     answer = 0
#     numbers_len=len(numbers)
    
#     def dfs(sum, idx):
#         nonlocal answer
        
#         if numbers_len==idx:
#             if sum==target:
#                 answer+=1
#             return
        
#         dfs(sum+numbers[idx], idx+1)
#         dfs(sum-numbers[idx], idx+1)
            
        
#     dfs(0, 0)
   
#     return answer

def solution(numbers, target):
    answer = 0
    numbers_len=len(numbers)
    
    def dfs (idx, num):
        nonlocal answer
        
        if idx==numbers_len:
            if num==target:
                answer+=1
            return
        dfs(idx+1, num-numbers[idx])
        dfs(idx+1, num+numbers[idx])
        
    dfs(0,0)
    
    return answer
    