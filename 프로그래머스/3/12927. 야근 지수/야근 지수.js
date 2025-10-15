function solution(n, works) {
    const worksLen = works.length
    works.sort((a,b)=>b-a)

    // 야근 피로도가 최소가 되려면 일의 작업량의 편차가 최소가 되어야 한다.
    let count = n
    
    while(count>0 && works[0]>0){
        
        works[0]--
        count--
        
        let prevWork = works[0]
        
        for(let i=1 ; i<worksLen; i++){
            if(works[i]>0 && works[i]>prevWork && count>0) {
                works[i]--
                count--
                prevWork = works[i]
            }
            else break
        }
    }

    return works.reduce((acc, curr)=> curr*curr + acc, 0)
}