def solution(board):
    lenCol=len(board)
    lenRow=len(board[0])
    for y in range(lenCol):
        for x in range(lenRow):
            if board[y][x]==1:
                for i in range(-1,2):
                    for j in range(-1,2):
                        if 0<=y+i<lenCol and 0<=x+j<lenRow:
                            if board[y+i][x+j]!=1:
                                board[y+i][x+j]=2
    
    sum=0
    for y in range(lenCol):
        print(board[y])
        for x in range(lenRow):
            if board[y][x]==0:
                sum+=1
    return sum