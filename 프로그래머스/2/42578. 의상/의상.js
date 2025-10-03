function solution(clothes) {
    const hash = {}
    for([cloth, type] of clothes){
        if(hash[type])
            hash[type].push(cloth)
        else hash[type]=[cloth]
    }
    
    let answer = 1;
    for(clothes of Object.values(hash)){
        answer*=(clothes.length+1)
    }

    return answer-1;
}