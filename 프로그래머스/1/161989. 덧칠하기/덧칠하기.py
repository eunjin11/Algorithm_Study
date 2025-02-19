def solution(n, m, section):
    answer = 0
    
    section_list = [0 for _ in range(n)]
    for i in section:
        section_list[i-1]=1
        
    for i in range(n):
        if section_list[i]==1 and i+m<=n:
            for j in range(m):
                section_list[i+j]=0
            answer+=1
            
    section_list.reverse()
    for i in range(n):
        if section_list[i]==1 and i+m<=n:
            for j in range(m):
                section_list[i+j]=0
            answer+=1
        
    return answer