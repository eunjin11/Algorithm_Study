function solution(s) {
    //해시맵으로 저장
    //해당 글자를 key로, 해당 글자가 가장 나중에 나온 index를 저장
    const hash = {}
    let answer = [];
    
    for (let i = 0 ; i<s.length ; i++){
        if (hash[s[i]]==undefined){
            hash[s[i]]=i
            answer.push(-1)
        }else{
            answer.push(i - hash[s[i]])
            hash[s[i]]=i
        }
    }
    
    return answer;
}