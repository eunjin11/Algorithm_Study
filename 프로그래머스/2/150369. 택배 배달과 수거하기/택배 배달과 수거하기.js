function solution(cap, n, deliveries, pickups) {
    let result = 0
    let dSum = 0, pSum = 0
    
    for (let i = n - 1; i >= 0; i--) {
        dSum += deliveries[i]
        pSum += pickups[i]

        while (dSum > 0 || pSum > 0) {
            dSum -= cap
            pSum -= cap
            result += (i + 1) * 2
        }
    }
    return result
}
