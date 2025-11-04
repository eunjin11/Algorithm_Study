function solution(sequence) {
    //1. 누적합을 구한다.
    let prefix1 = sequence.map((val, i) => {
        if (i%2===0) return -val
        else return val
    })
    
    let prefix2 = sequence.map((val, i) => {
        if (i%2===1) return -val
        else return val
    })
    
    let answer = Math.max(prefix1[0], prefix2[0])
    
    for(let i=1;i<sequence.length;i++){
        //수열에 i번째 요소까지 포함했을 때 가능한 가장 큰 값을 구한다.
        prefix1[i]=Math.max(prefix1[i]+prefix1[i-1], prefix1[i])
        prefix2[i]=Math.max(prefix2[i]+prefix2[i-1], prefix2[i])
        //구한 값과 기존 answer 중 가장 큰 값을 저장한다.
        answer = Math.max(answer, prefix1[i], prefix2[i])
    }
    
    return answer 
}