function solution(today, terms, privacies) {
    const valityMap = {}
    for(term of terms){
        const [type, month] = term.split(" ")
        valityMap[type]=Number(month)
    }
    const todayDate = new Date(today)
    
    const answer=[]
    for(let i=1; i<privacies.length+1; i++){
        const privacy = privacies[i-1]
        let [date, type] = privacy.split(" ")
        date = new Date(date)
        const endDate = date.setMonth(date.getMonth()+valityMap[type])
        
        if(todayDate>=endDate) answer.push(i)
    }
    return answer;
}