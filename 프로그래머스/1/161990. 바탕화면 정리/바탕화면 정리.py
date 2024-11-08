def solution(wallpaper):
    answer = []
    lenRow = len(wallpaper[0])
    lenCol = len(wallpaper)
    lux, luy = lenRow, lenCol
    rdx, rdy = 0, 0
    
    for y in range(lenCol):
        for x in range(lenRow):
            if wallpaper[y][x]=='#':
                rdx=max(rdx, x)
                lux=min(lux, x)
                rdy=max(rdy, y)
                luy=min(luy, y)
                
    return [luy, lux, rdy+1, rdx+1]