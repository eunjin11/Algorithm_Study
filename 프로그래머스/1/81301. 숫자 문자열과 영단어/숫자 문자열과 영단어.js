function solution(s) {
    const hashMap={
        'zero' : 0,
        'one' : 1,
        'two' : 2,
        'three' : 3,
        'four' : 4,
        'five' : 5,
        'six' : 6,
        'seven' : 7,
        'eight' : 8,
        'nine' : 9,
    }
    
    let answer = ""
    let temp=""
    
    for(let i=0;i<s.length;i++){
        if(hashMap[temp] !== undefined){
            answer+=hashMap[temp]
            temp=""
        }
        
        if(!isNaN(s[i])) answer+=s[i]
        else temp+=s[i]
    }
    
    if(hashMap[temp] !== undefined){
        answer+=hashMap[temp]
        temp=""
    }

    return Number(answer);
}