function solution(n) {
    if (n<=2) return 1
    
    let answer = 1;
    
    let start = 1
    let end = 2
  
    while(start<end){
        const sum = ((start+end)/2)*(end-start+1)
        if (sum===n){
            answer++
            end++
        }
        
        if(sum<n){
            end++
        }else {
            start++
        }
    }
    return answer;
}