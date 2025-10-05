function solution(progresses, speeds) {
    const answer = []
    
    let newProgresses = []
    for(let i=0;i<speeds.length;i++){
        newProgresses.push([progresses[i], speeds[i]])
    }
    
    while(newProgresses.length>0){
        const remainDays = Math.ceil((100-newProgresses[0][0])/newProgresses[0][1])
        
        let count = 0
        
        for(let i=0; i<newProgresses.length; i++){
            newProgresses[i][0]+=newProgresses[i][1]*remainDays
        }

        count++
        
        let finalIdx = 1
        for(let i=1; i<newProgresses.length; i++){
            if(newProgresses[i][0]>=100){
                count++
                finalIdx++
            }else{
                break
            }
        }
        
        newProgresses=newProgresses.slice(finalIdx)
        answer.push(count)
    }
    return answer;
}