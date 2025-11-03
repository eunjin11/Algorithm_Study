
function solution(n, s) {
    //1부터 10까지 더하기
    if(n>s) return [-1];
    
    //s를 n으로 나누기
    const quot = parseInt(s/n)
    
    var answer = Array.from({ length: n }, () => quot);
    //나머지가 있다면 겹치지 않게 더하기
    let remainder = s%n
    while(remainder>0){
        for(let i=n-1;i>=0;i--){
            answer[i]+=1
            remainder-=1
            if(remainder<=0) break
        }
    }
    
    return answer;
}