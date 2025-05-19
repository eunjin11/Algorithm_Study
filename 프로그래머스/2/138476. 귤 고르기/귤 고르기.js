    // 귤을 크기별로 분류했을 때 서로 다른 종류의 수를 최소화
function solution(k, tangerine) {
    let answer = 0
    //key: 크기, value: 개수 형태로 저장
    const count = {}
    tangerine.forEach((t) => count[t] ? count[t]++ : count[t] = 1 );
    
    //개수가 큰 순서대로 정렬
    const sortedCount = Object.values(count).sort((a, b) => b - a);
    
    //k에서 개수가 제일 많은 크기의 귤의 개수를 차례로 빼고, answer+=1
    for (const count of sortedCount){
        // k-=count
        // answer++
        // if(k<=0) break
        answer++
        if (k>count)
            k-=count
        else break
    }
    return answer;
}