import sys
input = sys.stdin.readline

T = int(input())

def split_string(str):
    result = []
    current_char = str[0]
    current_string = current_char

    for char in str[1:]:
        if char == current_char:
            current_string += char
        else:
            result.append(current_string)
            current_char = char
            current_string = char

    result.append(current_string)  # 마지막 그룹 추가
    return result

def merge(str_list):
    return split_string(''.join(str_list))
    
def dfs(str):

    str_list=merge(str)

    if len(str_list)==1:
        if len(str_list[0])==1:
            return 0
        else:
            return 1

    for i in range(len(str_list)):
        if len(str_list[i])>1:
            new_str_list=[]
            new_str_list+=str_list
            new_str_list.pop(i)

            if dfs(new_str_list)==1:
                return 1
    return 0

for _ in range(T):
    s = input().rstrip()
    str_list = split_string(s)  # 뭉탱이 단위로 분리
    result = dfs(str_list)
    print(result)