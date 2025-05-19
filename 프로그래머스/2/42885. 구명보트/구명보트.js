function solution(people, limit) {
    let answer=0
    //몸무게순으로 정렬
    //가장 무거운 사람을 보트에 태우고,
    //무게를 계산한 후 가장 가벼운 사람을 보트에 태움
    
    people.sort((a,b)=>a-b)
    
    let start = 0
    let end = people.length - 1
    
    while (start <= end){
        if (people[end] + people[start] <= limit) start++
        end--
        answer++
    }
    
    return answer;
}