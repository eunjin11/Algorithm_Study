function solution(d, budget) {
    return d.sort((a,b)=>a-b)
        .reduce((count, money) => count + ((budget-=money) >= 0 ? 1 : 0), 0,)
}