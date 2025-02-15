def solution(wallet, bill):
    answer = 0
    
    wallet_x=max(wallet)
    wallet_y=min(wallet)
    bill_x=max(bill)
    bill_y=min(bill)
    
    while wallet_y<bill_y or bill_x>wallet_x:
        bill_x=bill_x//2
        answer+=1
        
        if bill_x<bill_y:
            temp = bill_x
            bill_x = bill_y
            bill_y = temp
    
    return answer