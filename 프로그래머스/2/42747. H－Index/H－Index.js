function solution(citations) {
    //역순으로 sort
    citations.sort((a,b)=>b-a)
    for (let i = 0; i<citations.length ; i++){
        console.log(citations[i] + "회 이상 인용된 논문을 "+(i+1)+"편 보유")
        if (i+1>=citations[i]) {
            if (citations[i]<i) return i
            return citations[i]
        }
    }
    
    return citations.length
}